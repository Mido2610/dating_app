/**
 * Chuyển đổi dữ liệu từ hồ sơ gợi ý thành response format
 * @param {number} code - HTTP status code
 * @param {string} message - Thông báo
 * @param {Array} profiles - Danh sách hồ sơ gợi ý
 * @returns {Object} GetSuggestedProfilesResponse object
 */
const convertSuggestProfilesResponse = async (code, message, profiles) => {
  return {
    code,
    message,
    profiles: profiles.map(profile => ({
      id: profile.id || profile._id.toString(),
      name: profile.name,
      age: profile.age || 0,
      bio: profile.bio || '',
      photos: profile.photos || [],
      interests: profile.interests || [],
      gender: profile.gender
    }))
  };
};

/**
 * Chuyển đổi dữ liệu từ kết quả vuốt thành response format
 * @param {number} code - HTTP status code
 * @param {string} message - Thông báo
 * @param {Object} swipeResult - Kết quả từ việc vuốt
 * @returns {Object} SwipeResponse object
 */
const convertSwipeResponse = async (code, message, swipeResult) => {
  return {
    code,
    message,
    is_match: swipeResult.isMatch,
    match: swipeResult.isMatch && swipeResult.match ? {
      match_id: swipeResult.match.matchId,
      profile: {
        id: swipeResult.match.profile._id.toString(),
        name: swipeResult.match.profile.name,
        photos: swipeResult.match.profile.photos || [],
        bio: swipeResult.match.profile.bio || '',
        gender: swipeResult.match.profile.gender,
        age: swipeResult.match.profile.age || 0,
        interests: swipeResult.match.profile.interests || []
      },
      matched_at: swipeResult.match.matchedAt,
      last_message: swipeResult.match.lastMessage || '',
      last_message_time: swipeResult.match.lastMessageTime || ''
    } : null
  };
};

/**
 * Chuyển đổi dữ liệu Match thành response format
 * @param {Object} match - Đối tượng match
 * @returns {Object} Match object
 */
const convertMatch = (match) => {
  return {
    match_id: match.matchId,
    profile: {
      id: match.profile.id,
      name: match.profile.name,
      photos: match.profile.photos || [],
      bio: match.profile.bio || '',
      gender: match.profile.gender,
      age: match.profile.age || 0,
      interests: match.profile.interests || []
    },
    matched_at: match.matchedAt,
    last_message: match.lastMessage || '',
    last_message_time: match.lastMessageTime || ''
  };
};

/**
 * Chuyển đổi dữ liệu danh sách matches thành response format
 * @param {number} code - HTTP status code
 * @param {string} message - Thông báo
 * @param {Object} matchData - Dữ liệu matches
 * @returns {Object} ListMatchesResponse object
 */
const convertListMatchesResponse = async (code, message, matchData) => {
  return {
    code,
    message,
    matches: matchData.matches.map(match => convertMatch(match)),
    total: matchData.total,
    has_more: matchData.hasMore
  };
};

/**
 * Chuyển đổi dữ liệu unmatch thành response format
 * @param {number} code - HTTP status code
 * @param {string} message - Thông báo
 * @param {Object} result - Kết quả unmatch
 * @returns {Object} UnmatchProfileResponse object
 */
const convertUnmatchResponse = async (code, message, result) => {
  return {
    code,
    message,
    success: result?.success || true
  };
};

module.exports = {
  convertSuggestProfilesResponse,
  convertSwipeResponse,
  convertListMatchesResponse,
  convertUnmatchResponse
};