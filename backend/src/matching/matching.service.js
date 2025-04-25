// const _ = require('lodash');
const Match = require('../models/matching.model');
const User = require('../models/user.model');
const { throwBadRequest } = require('../common/utils/errorHandler.util');
const { getMessageByLocale } = require('../common/utils/locale.util');

const getSuggestedProfiles = async (userId, limit = 10, excludedIds = []) => {
  try {
    // Get user's preferences and info
    const user = await User.findById(userId);
    if (!user) {
      throwBadRequest(true, getMessageByLocale({ key: 'userNotFound' }));
    }

    console.log('Current user:', {
      id: user._id,
      gender: user.gender,
      preferences: user.preferences
    });

    // Get existing matches/actions to exclude
    const existingMatches = await Match.find({
      users: userId
    }).distinct('users');

    const excludeUsers = [...excludedIds, userId, ...existingMatches];
    console.log('Excluded users:', excludeUsers);

    // Build gender query based on preference
    const genderPreference = user.preferences?.genderPreference || 'both';
    let genderQuery = {};
    
    if (genderPreference === 'both') {
      genderQuery = { gender: { $in: ['male', 'female'] } };
    } else {
      genderQuery = { gender: genderPreference };
    }

    console.log('Gender preference:', genderPreference);
    console.log('Gender query:', genderQuery);

    const query = {
      _id: { $nin: excludeUsers },
      emailVerified: true,
      ...genderQuery
    };

    console.log('MongoDB query:', query);

    const suggestedProfiles = await User.find(query)
      .limit(limit)
      .select('name age bio photos interests gender birthday')
      .lean();

    console.log('Found profiles count:', suggestedProfiles.length);
    console.log('Found profiles:', suggestedProfiles.map(p => ({
      id: p._id,
      name: p.name,
      gender: p.gender,
      emailVerified: p.emailVerified
    })));

    // Calculate age for each profile
    const profilesWithAge = suggestedProfiles.map(profile => ({
      ...profile,
      age: profile.birthday ? Math.floor((new Date() - new Date(profile.birthday)) / (365.25 * 24 * 60 * 60 * 1000)) : null
    }));

    return profilesWithAge;

  } catch (error) {
    console.error('Error in getSuggestedProfiles:', error);
    throw error;
  }
};

const performAction = async (userId, targetUserId, action) => {
  // Validate users exist
  const [user, targetUser] = await Promise.all([
    User.findById(userId),
    User.findById(targetUserId)
  ]);

  if (!user || !targetUser) {
    throwBadRequest(true, getMessageByLocale({ key: 'userNotFound' }));
  }

  // Find or create match document
  let match = await Match.findOne({
    users: { $all: [userId, targetUserId] }
  });

  if (!match) {
    match = new Match({
      users: [userId, targetUserId],
      actions: []
    });
  }

  // Add action
  match.actions.push({
    userId,
    action,
    timestamp: new Date()
  });

  // Check if both users liked each other
  if (action === 'like') {
    const targetUserLiked = match.actions.some(a => 
      a.userId.toString() === targetUserId && a.action === 'like'
    );

    if (targetUserLiked) {
      match.status = 'matched';
      match.matchedAt = new Date();
    }
  }

  await match.save();
  return match;
};

const listMatches = async (userId, filter = {}, options = {}) => {
  const matches = await Match.find({
    users: userId,
    status: filter.status || 'matched'
  })
    .sort({ matchedAt: -1 })
    .skip(options.skip)
    .limit(options.limit)
    .populate('users', 'name photos bio');

  const total = await Match.countDocuments({
    users: userId,
    status: filter.status || 'matched'
  });

  return {
    matches,
    total,
    hasMore: total > (options.skip + matches.length)
  };
};

const unmatch = async (userId, matchId) => {
  const match = await Match.findOne({
    _id: matchId,
    users: userId,
    status: 'matched'
  });

  if (!match) {
    throwBadRequest(true, getMessageByLocale({ key: 'matchNotFound' }));
  }

  match.status = 'unmatched';
  await match.save();

  return true;
};

module.exports = {
  getSuggestedProfiles,
  performAction,
  listMatches,
  unmatch
};
