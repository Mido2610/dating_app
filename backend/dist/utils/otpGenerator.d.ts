declare class OTPUtil {
    /**
     * Generate a 4-digit OTP
     * @returns A random 4-digit OTP as a string
     */
    static generateOTP(): string;
    /**
     * Generate an expiration time for an OTP
     * @returns Timestamp when the OTP will expire (5 minutes from now)
     */
    static generateExpirationTime(): number;
}
export default OTPUtil;
