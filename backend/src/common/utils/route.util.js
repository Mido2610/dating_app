const fs = require('fs');
const path = require('path');
const express = require('express');

/**
 * Auto-loads route files and mounts them to the main router
 * @param {string} baseDir - Base directory to scan for route files
 * @returns {express.Router} Router with all routes mounted
 */
function loadRoutes(baseDir) {
  const router = express.Router();
  
  // Scan all directories in the base directory
  fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .forEach(dir => {
      const routeFile = path.join(baseDir, dir.name, `${dir.name}.route.js`);
      
      // Check if route file exists
      if (fs.existsSync(routeFile)) {
        try {
          const route = require(routeFile);
          // Mount route using directory name as path prefix
          // Example: /user/user.route.js -> /api/users/...
          router.use(`/${dir.name}`, route);
          console.log(`✅ Loaded route: /${dir.name}`);
        } catch (error) {
          console.error(`❌ Failed to load route ${routeFile}:`, error);
        }
      }
    });

  return router;
}

module.exports = {
  loadRoutes
};
