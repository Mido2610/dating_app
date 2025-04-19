/**
 * Integration tests for OTP API with Protocol Buffers
 */

import * as proto from '../../src/protos/generated/user_pb';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

describe('OTP API with Protocol Buffers', () => {
  // Test variables
  let verificationId: string;
  let smsCode: string;

  /**
   * Test sending OTP with Protocol Buffers
   */
  test('should send OTP using protobuf format', async () => {
    // Create request message
    const request = new proto.user.SendOtpRequest();
    request.phone = "+84123456789"; // Use a test phone number
    
    // Serialize to binary format
    const binary = proto.user.SendOtpRequest.encode(request).finish();
    
    // Send as binary request
    const response = await axios.post(`${API_URL}/otp/send-otp`, binary, {
      headers: {
        'Content-Type': 'application/protobuf',
        'Accept': 'application/protobuf'
      },
      responseType: 'arraybuffer'
    });
    
    // Parse binary response
    const responseProto = proto.user.SendOtpResponse.decode(new Uint8Array(response.data));
    
    // Save values for next test
    verificationId = responseProto.verificationId;
    smsCode = responseProto.smsCode;
    
    // Assertions
    expect(response.status).toBe(200);
    expect(responseProto.code).toBe(200);
    expect(responseProto.message).toBe("Verification code sent successfully");
    expect(responseProto.verificationId).toBeTruthy();
    expect(responseProto.smsCode).toBeTruthy();
  });
  
  /**
   * Test verifying OTP with Protocol Buffers
   */
  test('should verify OTP using protobuf format', async () => {
    // Skip if previous test failed
    if (!verificationId || !smsCode) {
      console.log('Skipping verify test as send OTP test failed');
      return;
    }
    
    // Create request message
    const request = new proto.user.VerifyOtpRequest();
    request.verificationId = verificationId;
    request.smsCode = smsCode;
    
    // Serialize to binary format
    const binary = proto.user.VerifyOtpRequest.encode(request).finish();
    
    // Send as binary request
    const response = await axios.post(`${API_URL}/otp/verify-otp`, binary, {
      headers: {
        'Content-Type': 'application/protobuf',
        'Accept': 'application/protobuf'
      },
      responseType: 'arraybuffer'
    });
    
    // Parse binary response
    const responseProto = proto.user.VerifyOtpResponse.decode(new Uint8Array(response.data));
    
    // Assertions
    expect(response.status).toBe(200);
    expect(responseProto.code).toBe(200);
    expect(responseProto.message).toBe("Phone number verified successfully");
    expect(responseProto.user).toBeTruthy();
  });
  
  /**
   * Test backward compatibility with JSON
   */
  test('should support JSON format for sending OTP', async () => {
    const response = await axios.post(`${API_URL}/otp/send-otp`, {
      phone: "+84123456789"
    });
    
    // Assertions
    expect(response.status).toBe(200);
    expect(response.data.code).toBe(200);
    expect(response.data.message).toBe("Verification code sent successfully");
    expect(response.data.verificationId).toBeTruthy();
  });
});

/**
 * Manual testing examples
 */
export async function manualSendOTPTest(phoneNumber: string) {
  console.log(`Testing send OTP for phone: ${phoneNumber}`);
  
  // Create request message
  const request = new proto.user.SendOtpRequest();
  request.phone = phoneNumber;
  
  // Serialize to binary format
  const binary = proto.user.SendOtpRequest.encode(request).finish();
  
  try {
    // Send as binary request
    const response = await axios.post(`${API_URL}/otp/send-otp`, binary, {
      headers: {
        'Content-Type': 'application/protobuf',
        'Accept': 'application/protobuf'
      },
      responseType: 'arraybuffer'
    });
    
    // Parse binary response
    const responseProto = proto.user.SendOtpResponse.decode(new Uint8Array(response.data));
    
    console.log('Response code:', responseProto.code);
    console.log('Response message:', responseProto.message);
    console.log('Verification ID:', responseProto.verificationId);
    console.log('SMS Code (dev mode):', responseProto.smsCode);
    
    return responseProto;
  } catch (error) {
    console.error('Error in sendOTP test:', error);
    throw error;
  }
}

export async function manualVerifyOTPTest(verificationId: string, smsCode: string) {
  console.log(`Testing verify OTP with ID: ${verificationId} and code: ${smsCode}`);
  
  // Create request message
  const request = new proto.user.VerifyOtpRequest();
  request.verificationId = verificationId;
  request.smsCode = smsCode;
  
  // Serialize to binary format
  const binary = proto.user.VerifyOtpRequest.encode(request).finish();
  
  try {
    // Send as binary request
    const response = await axios.post(`${API_URL}/otp/verify-otp`, binary, {
      headers: {
        'Content-Type': 'application/protobuf',
        'Accept': 'application/protobuf'
      },
      responseType: 'arraybuffer'
    });
    
    // Parse binary response
    const responseProto = proto.user.VerifyOtpResponse.decode(new Uint8Array(response.data));
    
    console.log('Response code:', responseProto.code);
    console.log('Response message:', responseProto.message);
    
    if (responseProto.user) {
      console.log('User ID:', responseProto.user.id);
      console.log('User email:', responseProto.user.email);
      console.log('User fullName:', responseProto.user.fullName);
    }
    
    return responseProto;
  } catch (error) {
    console.error('Error in verifyOTP test:', error);
    throw error;
  }
}

// For manual testing from command line
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'send') {
    const phone = args[1] || '+84123456789';
    manualSendOTPTest(phone)
      .then(response => console.log('Test completed with verification ID:', response.verificationId))
      .catch(err => console.error('Test failed:', err));
  } else if (command === 'verify') {
    const verificationId = args[1];
    const smsCode = args[2];
    
    if (!verificationId || !smsCode) {
      console.error('Usage: ts-node otp-proto.test.ts verify <verificationId> <smsCode>');
      process.exit(1);
    }
    
    manualVerifyOTPTest(verificationId, smsCode)
      .then(response => console.log('Test completed with code:', response.code))
      .catch(err => console.error('Test failed:', err));
  } else {
    console.log('Usage: ts-node otp-proto.test.ts [send|verify] [params]');
  }
} 