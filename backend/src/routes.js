const express = require('express');
const path = require('path');
const { loadRoutes } = require('./common/utils/route.util');
const matchingRoute = require('./matching/matching.route');

const router = express.Router();

// Mount matching routes
router.use('/api/matching', matchingRoute);

// Auto-load all routes from feature directories
router.use('/', loadRoutes(path.join(__dirname)));

module.exports = router;
