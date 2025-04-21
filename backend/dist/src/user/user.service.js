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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const user_schema_1 = __importDefault(require("./user.schema"));
const env_config_1 = require("../common/configs/env.config");
const errorHandler_util_1 = require("../common/utils/errorHandler.util");
class AuthService {
    static register(registerRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = registerRequest;
            const foundUser = yield user_schema_1.default.findOne({ email });
            (0, errorHandler_util_1.throwBadRequest)(!!foundUser, 'User with this email already exists', grpc.status.ALREADY_EXISTS);
            yield user_schema_1.default.create({ email });
        });
    }
    static sendEmailOtp(request, otpCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = request;
            // Find or create user
            let user = yield user_schema_1.default.findOne({ email });
            if (!user) {
                user = yield user_schema_1.default.create({ email });
            }
            const verificationId = Date.now().toString();
            const transporter = nodemailer_1.default.createTransport({
                service: env_config_1.config.email.service,
                auth: {
                    user: env_config_1.config.email.user,
                    pass: env_config_1.config.email.password
                }
            });
            yield transporter.sendMail({
                from: env_config_1.config.email.from,
                to: email,
                subject: 'Email Verification OTP',
                text: `Your verification code is: ${otpCode}`
            });
            return verificationId;
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=user.service.js.map