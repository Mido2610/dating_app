const express = require("express");
const path = require("path");
const { loadRoutes } = require("./common/utils/route.util");

const router = express.Router();

// Auto-load all routes from feature directories
router.use("/", loadRoutes(path.join(__dirname)));

module.exports = router;