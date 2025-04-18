"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./src/user/user.route"));
const otp_route_1 = __importDefault(require("./src/otp/otp.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Main routes
app.use('/', user_route_1.default);
app.use('/otp', otp_route_1.default);
// Server health check route
app.get('/server-info', (req, res) => {
    res.json({
        status: '✅ Server is running without MongoDB',
        time: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    });
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map