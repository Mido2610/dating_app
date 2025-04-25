const express = require('express');
const { validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const matchingController = require('./matching.controller');
const matchingValidation = require('./matching.validation');

const router = express.Router();
//end point
// GET /api/matching/suggestions - Get suggested profiles
// POST /api/matching/action - Perform like/pass action
// GET /api/matching/matches - Get user's matches
// DELETE /api/matching/matches/:matchId - Unmatch with a user
// All matching routes require authentication
router.use(authenticate);

// Get suggested profiles
router.get(
  '/suggestions',
  validate(matchingValidation.suggestProfiles),
  matchingController.getSuggestedProfiles
);

// Perform like/pass action
router.post(
  '/action',
  validate(matchingValidation.performAction),
  matchingController.performAction
);

// Get user's matches
router.get(
  '/matches',
  validate(matchingValidation.listMatches),
  matchingController.listMatches
);

// Unmatch with a user
router.delete(
  '/matches/:matchId',
  validate(matchingValidation.unmatch),
  matchingController.unmatch
);

module.exports = router;