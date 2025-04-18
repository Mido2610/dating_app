"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
/**
 * User Schema - matches exactly with IUser interface
 */
const UserSchema = new mongoose_1.Schema({
    /**
     * User's phone number (required)
     */
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    /**
     * User's email address
     */
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        trim: true
    },
    /**
     * User's hashed password
     */
    password: {
        type: String,
        required: false
    },
    /**
     * User's full name
     */
    name: {
        type: String,
        required: false,
        trim: true
    },
    /**
     * URL to user's avatar image
     */
    avatar: {
        type: String,
        required: false
    },
    /**
     * User's biography or description
     */
    bio: {
        type: String,
        required: false
    },
    /**
     * User's account status
     */
    status: {
        type: String,
        enum: ['active', 'inactive', 'banned'],
        default: 'active'
    }
}, {
    /**
     * Automatically add createdAt and updatedAt fields
     */
    timestamps: true
});
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.schema.js.map