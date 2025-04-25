const Joi = require('joi');

const suggestProfiles = {
  query: Joi.object().keys({
    limit: Joi.number().integer().min(1).max(100).default(10),
    excludedIds: Joi.array().items(Joi.string()).optional()
  })
};

const performAction = {
  body: Joi.object().keys({
    targetUserId: Joi.string().required(),
    action: Joi.string().valid('like', 'pass').required()
  })
};

const listMatches = {
  query: Joi.object().keys({
    page: Joi.number().min(1).default(1),
    limit: Joi.number().min(1).max(100).default(10),
    sortBy: Joi.string(),
    sortOrder: Joi.string().valid('asc', 'desc'),
    status: Joi.string().valid('pending', 'matched', 'unmatched')
  })
};

const unmatch = {
  params: Joi.object().keys({
    matchId: Joi.string().required()
  })
};

module.exports = {
  suggestProfiles,
  performAction,
  listMatches,
  unmatch
};
