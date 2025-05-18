// const _ = require('lodash');
const Match = require('../models/matching.model');
const User = require('../models/user.model');
const { throwBadRequest } = require('../common/utils/errorHandler.util');
const { getMessageByLocale } = require('../common/utils/locale.util');

/**
 * Lấy danh sách hồ sơ gợi ý cho người dùng
 * @param {string} userId - ID của người dùng hiện tại
 * @param {number} limit - Số lượng kết quả tối đa
 * @param {Array<string>} excludedIds - Danh sách ID đã vuốt qua
 * @returns {Promise<Array>} Danh sách hồ sơ gợi ý
 */
const getSuggestedProfiles = async (userId, limit = 10, excludedIds = []) => {
  try {
    // Get user's preferences and info
    const user = await User.findById(userId);
    if (!user) {
      throwBadRequest(true, getMessageByLocale({ key: 'userNotFound' }));
    }

    // Get existing matches/actions to exclude
    const existingMatches = await Match.find({
      users: userId
    }).distinct('users');

    const excludeUsers = [...excludedIds, userId, ...existingMatches.filter(id => id.toString() !== userId)];

    // Build gender query based on preference
    const genderPreference = user.preferences?.genderPreference || 'both';
    let genderQuery = {};
    
    if (genderPreference === 'both') {
      genderQuery = { gender: { $in: ['male', 'female'] } };
    } else {
      genderQuery = { gender: genderPreference };
    }

    const query = {
      _id: { $nin: excludeUsers },
      emailVerified: true,
      ...genderQuery
    };

    const suggestedProfiles = await User.find(query)
      .limit(parseInt(limit, 10))
      .select('name age bio photos interests gender birthday')
      .lean();

    // Calculate age for each profile
    const profilesWithAge = suggestedProfiles.map(profile => ({
      ...profile,
      id: profile._id.toString(),
      age: profile.birthday ? Math.floor((new Date() - new Date(profile.birthday)) / (365.25 * 24 * 60 * 60 * 1000)) : null
    }));

    return profilesWithAge;
  } catch (error) {
    console.error('Error in getSuggestedProfiles:', error);
    throw error;
  }
};

/**
 * Thực hiện hành động vuốt (like/dislike)
 * @param {string} userId - ID của người dùng hiện tại
 * @param {string} targetProfileId - ID của hồ sơ bị vuốt
 * @param {string} action - Hành động (like/dislike)
 * @returns {Promise<Object>} Kết quả thực hiện
 */
const swipe = async (userId, targetProfileId, action) => {
  // Validate users exist
  const [user, targetUser] = await Promise.all([
    User.findById(userId),
    User.findById(targetProfileId)
  ]);

  if (!user || !targetUser) {
    throwBadRequest(true, getMessageByLocale({ key: 'userNotFound' }));
  }

  // Convert action from proto to database format
  const dbAction = action === 1 ? 'like' : 'pass';

  // Find or create match document
  let match = await Match.findOne({
    users: { $all: [userId, targetProfileId] }
  });

  if (!match) {
    match = new Match({
      users: [userId, targetProfileId],
      actions: []
    });
  }

  // Add action
  match.actions.push({
    userId,
    action: dbAction,
    timestamp: new Date()
  });

  // Check if both users liked each other
  let isMatch = false;
  if (dbAction === 'like') {
    const targetUserLiked = match.actions.some(a => 
      a.userId.toString() === targetProfileId && a.action === 'like'
    );

    if (targetUserLiked) {
      match.status = 'matched';
      match.matchedAt = new Date();
      isMatch = true;
    }
  }

  await match.save();
  
  // Return match information if it's a match
  return {
    isMatch,
    match: isMatch ? {
      matchId: match._id.toString(),
      profile: targetUser,
      matchedAt: match.matchedAt.toISOString(),
      lastMessage: match.lastMessage || '',
      lastMessageTime: match.lastMessageTime ? match.lastMessageTime.toISOString() : ''
    } : null
  };
};

/**
 * Lấy danh sách matches của người dùng
 * @param {string} userId - ID của người dùng
 * @param {Object} filter - Bộ lọc
 * @param {Object} options - Tùy chọn phân trang
 * @returns {Promise<Object>} Danh sách matches và thông tin phân trang
 */
const listMatches = async (userId, filter = {}, options = {}) => {
  const page = options.page || 1;
  const limit = options.limit || 10;
  const skip = (page - 1) * limit;

  const matches = await Match.find({
    users: userId,
    status: filter.status || 'matched'
  })
    .sort({ matchedAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('users', 'name photos bio gender age interests');

  const total = await Match.countDocuments({
    users: userId,
    status: filter.status || 'matched'
  });

  // Format matches according to proto definition
  const formattedMatches = matches.map(match => {
    // Find the other user in the match
    const otherUser = match.users.find(user => user._id.toString() !== userId);
    
    return {
      matchId: match._id.toString(),
      profile: otherUser ? {
        id: otherUser._id.toString(),
        name: otherUser.name,
        photos: otherUser.photos || [],
        bio: otherUser.bio || '',
        gender: otherUser.gender,
        age: otherUser.age || 0,
        interests: otherUser.interests || []
      } : null,
      matchedAt: match.matchedAt ? match.matchedAt.toISOString() : '',
      lastMessage: match.lastMessage || '',
      lastMessageTime: match.lastMessageTime ? match.lastMessageTime.toISOString() : ''
    };
  });

  return {
    matches: formattedMatches,
    total,
    hasMore: total > (skip + matches.length)
  };
};

/**
 * Hủy kết nối với một match
 * @param {string} matchId - ID của match cần hủy
 * @returns {Promise<boolean>} Kết quả thực hiện
 */
const unmatchProfile = async (matchId) => {
  const match = await Match.findOne({
    _id: matchId,
    status: 'matched'
  });

  if (!match) {
    throwBadRequest(true, getMessageByLocale({ key: 'matchNotFound' }));
  }

  match.status = 'unmatched';
  await match.save();

  return { success: true };
};

module.exports = {
  getSuggestedProfiles,
  swipe,
  listMatches,
  unmatchProfile
};
