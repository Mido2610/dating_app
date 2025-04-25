const CatchAsync = require('../middlewares/catchAsync.middleware');
const MatchingService = require('./matching.service');
const { getMessageByLocale } = require('../common/utils/locale.util');
const {
  convertSuggestProfilesResponse,
  convertListMatchesResponse,
  convertUnmatchResponse
} = require('./matching.converter');

const getSuggestedProfiles = CatchAsync(async (req, res) => {
  const { limit, excludedIds } = req.query;
  const profiles = await MatchingService.getSuggestedProfiles(
    req.user.id,
    limit,
    excludedIds
  );

  const response = await convertSuggestProfilesResponse(
    200,
    getMessageByLocale({ key: 'success' }),
    profiles
  );

  res.status(200).send(response);
});

const performAction = CatchAsync(async (req, res) => {
  const { targetUserId, action } = req.body;
  const result = await MatchingService.performAction(
    req.user.id,
    targetUserId,
    action
  );

  res.status(200).json({
    success: true,
    message: getMessageByLocale({ key: 'action_success' }),
    match: result
  });
});

const listMatches = CatchAsync(async (req, res) => {
  const filter = {
    status: req.query.status
  };

  const options = {
    limit: parseInt(req.query.limit, 10) || 10,
    skip: parseInt(req.query.skip, 10) || 0
  };

  const matchData = await MatchingService.listMatches(
    req.user.id,
    filter,
    options
  );

  const response = await convertListMatchesResponse(
    200,
    getMessageByLocale({ key: 'success' }),
    matchData,
    req.user.id
  );

  res.status(200).send(response);
});

const unmatch = CatchAsync(async (req, res) => {
  const { matchId } = req.params;
  await MatchingService.unmatch(req.user.id, matchId);

  const response = await convertUnmatchResponse(
    200,
    getMessageByLocale({ key: 'unmatch_success' })
  );

  res.status(200).send(response);
});

module.exports = {
  getSuggestedProfiles,
  performAction,
  listMatches,
  unmatch
};