
class OTPUtil {
  static generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  static generateExpirationTime() {
    // OTP hết hạn sau 5 phút
    return Date.now() + 5 * 60 * 1000;
  }
}

export default OTPUtil;
