class OTPUtil {
  /**
   * Generate a 4-digit OTP
   * @returns A random 4-digit OTP as a string
   */
  static generateOTP(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  /**
   * Generate an expiration time for an OTP
   * @returns Timestamp when the OTP will expire (5 minutes from now)
   */
  static generateExpirationTime(): number {
    // OTP expires after 5 minutes
    return Date.now() + 5 * 60 * 1000;
  }
}

export default OTPUtil;