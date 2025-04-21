import { RegisterRequest } from '../proto/generated/auth/RegisterRequest';
import { SendEmailOtpRequest } from '../proto/generated/auth/SendEmailOtpRequest';
declare class AuthService {
    static register(registerRequest: RegisterRequest): Promise<void>;
    static sendEmailOtp(request: SendEmailOtpRequest, otpCode: string): Promise<string>;
}
export default AuthService;
