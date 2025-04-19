interface SendOTPResult {
    verificationId: string;
    resendDelay: number;
    otpCode: string;
}
interface VerifyOTPResult {
    id: string;
    phoneNumber: string;
}
declare const otpService: {
    sendOTP(phoneNumber: string): Promise<SendOTPResult>;
    verifyOTP(verificationId: string, smsCode: string): Promise<VerifyOTPResult>;
};
export default otpService;
