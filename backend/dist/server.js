"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./utils/logger"));
const user_route_1 = __importDefault(require("./src/user/user.route"));
const otp_route_1 = __importDefault(require("./src/otp/otp.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Health check route - place first
app.get('/api/health', (req, res) => {
    res.json({
        status: '✅ Server is running',
        time: new Date().toISOString(),
        environment: process.env.VERCEL_ENV || 'development',
    });
});
// Basic test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Dating App API' });
});
// Debug route for OTP testing
app.get('/api/otp/debug', (req, res) => {
    console.log('🔍 OTP Debug route accessed');
    res.json({
        message: 'OTP Debug route working',
        routes: {
            sendOTP: '/api/otp/send',
            verifyOTP: '/api/otp/verify'
        },
        timestamp: new Date().toISOString()
    });
});
// Connect to MongoDB safely
let dbConnection = false;
(0, db_1.default)()
    .then((conn) => {
    if (conn) {
        dbConnection = true;
    }
})
    .catch((error) => {
    logger_1.default.error('MongoDB connection error:', error);
    dbConnection = false;
});
// Middleware to check DB connection before processing routes that require DB
const checkDB = (req, res, next) => {
    if (!dbConnection && req.path !== '/api/health' && req.path !== '/') {
        return res.status(503).json({
            status: 'error',
            message: 'Database connection is not ready',
        });
    }
    next();
};
app.use(checkDB);
// Main routes
app.use('/api', user_route_1.default);
app.use('/api/otp', otp_route_1.default);
app.use((err, req, res, next) => {
    logger_1.default.error(err);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err : {},
    });
});
// Fallback route
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found',
    });
});
// Only listen when running locally
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
}
exports.default = app;
//# sourceMappingURL=server.js.map