"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        const conn = await mongoose_1.default.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            socketTimeoutMS: 45000, // Timeout after 45 seconds
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        return conn.connection;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`❌ MongoDB Connection Error: ${error.message}`);
        }
        else {
            console.error('❌ MongoDB Connection Error: Unknown error');
        }
        return false;
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map