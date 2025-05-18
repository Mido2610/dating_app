const express = require('express');
const { validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const matchingController = require('./matching.controller');
const matchingValidation = require('./matching.validation');

const router = express.Router();

// Tất cả các route matching đều yêu cầu xác thực
router.use(authenticate);

/**
 * @route GET /api/matching/suggestions
 * @desc Lấy danh sách hồ sơ gợi ý
 * @access Private
 */
router.get(
  '/suggestions',
  validate(matchingValidation.suggestProfiles),
  matchingController.getSuggestedProfiles
);

/**
 * @route POST /api/matching/swipe
 * @desc Thực hiện hành động vuốt (like/dislike)
 * @access Private
 */
router.post(
  '/swipe',
  validate(matchingValidation.swipe),
  matchingController.swipe
);

/**
 * @route GET /api/matching/matches
 * @desc Lấy danh sách matches của người dùng
 * @access Private
 */
router.get(
  '/matches',
  validate(matchingValidation.listMatches),
  matchingController.listMatches
);

/**
 * @route DELETE /api/matching/matches/:matchId
 * @desc Hủy kết nối với một match
 * @access Private
 */
router.delete(
  '/matches/:matchId',
  validate(matchingValidation.unmatchProfile),
  matchingController.unmatchProfile
);

module.exports = router;