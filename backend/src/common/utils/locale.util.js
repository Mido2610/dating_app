const messages = {
    en: {
      userNotFound: 'User not found',
      userAlreadyExists: 'User already exists',
      invalidCredentials: 'Invalid email or password',
      incorrectPassword: 'Current password is incorrect',
      invalidToken: 'Invalid or expired token',
      unauthorized: 'Unauthorized access',
      invalidOTP: 'Invalid or expired verification code',
      emailVerificationSuccess: 'Email verified successfully',
      emailAlreadyVerified: 'Email is already verified',
      update_success: 'Profile updated successfully'
    },
    vi: {
      userNotFound: 'Không tìm thấy người dùng',
      userAlreadyExists: 'Người dùng đã tồn tại',
      invalidCredentials: 'Email hoặc mật khẩu không đúng',
      incorrectPassword: 'Mật khẩu hiện tại không đúng',
      invalidToken: 'Token không hợp lệ hoặc đã hết hạn',
      unauthorized: 'Không có quyền truy cập',
      invalidOTP: 'Mã xác thực không hợp lệ hoặc đã hết hạn',
      emailVerificationSuccess: 'Xác thực email thành công',
      emailAlreadyVerified: 'Email đã được xác thực trước đó',
      update_success: 'Cập nhật thông tin thành công'
    }
  };
  
  const getMessageByLocale = ({ key, locale = 'en' }) => {
    return messages[locale]?.[key] || messages.en[key] || key;
  };
  
  module.exports = {
    getMessageByLocale
  };
