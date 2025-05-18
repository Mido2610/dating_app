const Joi = require('joi');

/**
 * Validation cho việc lấy danh sách gợi ý
 */
const suggestProfiles = {
  query: Joi.object().keys({
    limit: Joi.number().integer().min(1).max(100).default(10),
    excludedIds: Joi.array().items(Joi.string()).optional()
  })
};

/**
 * Validation cho việc thực hiện swipe
 * Chú ý: action dựa trên SwipeAction trong proto (DISLIKE=0, LIKE=1)
 */
const swipe = {
  body: Joi.object().keys({
    targetProfileId: Joi.string().required(),
    action: Joi.number().valid(0, 1).required().messages({
      'any.only': 'Action must be 0 (DISLIKE) or 1 (LIKE)'
    })
  })
};

/**
 * Validation cho việc lấy danh sách matches
 */
const listMatches = {
  query: Joi.object().keys({
    page: Joi.number().min(1).default(1),
    limit: Joi.number().min(1).max(100).default(10)
  })
};

/**
 * Validation cho việc unmatch profile
 */
const unmatchProfile = {
  params: Joi.object().keys({
    matchId: Joi.string().required()
  })
};

module.exports = {
  suggestProfiles,
  swipe,
  listMatches,
  unmatchProfile
};
