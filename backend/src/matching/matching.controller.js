const CatchAsync = require('../middlewares/catchAsync.middleware');
const MatchingService = require('./matching.service');
const { getMessageByLocale } = require('../common/utils/locale.util');
const {
  convertSuggestProfilesResponse,
  convertSwipeResponse,
  convertListMatchesResponse,
  convertUnmatchResponse
} = require('./matching.converter');

/**
 * Lấy danh sách hồ sơ gợi ý cho người dùng
 */
const getSuggestedProfiles = CatchAsync(async (req, res) => {
  const { limit = 10, excludedIds = [] } = req.query;
  
  // Gọi service để lấy danh sách gợi ý
  const profiles = await MatchingService.getSuggestedProfiles(
    req.user.id,
    limit,
    excludedIds
  );

  // Chuyển đổi kết quả theo proto
  const response = await convertSuggestProfilesResponse(
    200,
    getMessageByLocale({ key: 'success' }),
    profiles
  );

  res.status(200).send(response);
});

/**
 * Thực hiện hành động vuốt (like/dislike)
 */
const swipe = CatchAsync(async (req, res) => {
  const { targetProfileId, action } = req.body;
  
  // Gọi service để thực hiện hành động vuốt
  const result = await MatchingService.swipe(
    req.user.id,
    targetProfileId,
    action
  );

  // Chuyển đổi kết quả theo proto
  const response = await convertSwipeResponse(
    200,
    getMessageByLocale({ key: 'action_success' }),
    result
  );

  res.status(200).send(response);
});

/**
 * Lấy danh sách matches của người dùng
 */
const listMatches = CatchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  // Gọi service để lấy danh sách matches
  const matchesData = await MatchingService.listMatches(
    req.user.id,
    { status: 'matched' },
    { page, limit }
  );

  // Chuyển đổi kết quả theo proto
  const response = await convertListMatchesResponse(
    200,
    getMessageByLocale({ key: 'success' }),
    matchesData
  );

  res.status(200).send(response);
});

/**
 * Hủy kết nối với một match
 */
const unmatchProfile = CatchAsync(async (req, res) => {
  const { matchId } = req.params;
  
  // Gọi service để hủy kết nối
  const result = await MatchingService.unmatchProfile(matchId);

  // Chuyển đổi kết quả theo proto
  const response = await convertUnmatchResponse(
    200,
    getMessageByLocale({ key: 'unmatch_success' }),
    result
  );

  res.status(200).send(response);
});

module.exports = {
  getSuggestedProfiles,
  swipe,
  listMatches,
  unmatchProfile
};