"use strict";
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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserService {
    static registerUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request;
            // Simulate user registration logic
            // Here you would typically hash the password and save the user to the database
            // For demonstration, we are just logging the user details
            // Hash the password
            if (!password) {
                throw new Error("Password is required");
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            // Save user to the database (simulated)
            const user = {
                email,
                password: hashedPassword,
            };
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map