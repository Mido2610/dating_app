/**
 * Simple test runner for manual testing
 * 
 * Usage:
 *   ts-node tests/run-tests.ts otp send +84123456789
 *   ts-node tests/run-tests.ts otp verify <verificationId> <smsCode>
 */

import { manualSendOTPTest, manualVerifyOTPTest } from './integration/otp-proto.test';

// Process command line arguments
const args = process.argv.slice(2);
const testGroup = args[0]?.toLowerCase();
const testCommand = args[1]?.toLowerCase();

// Run appropriate test based on command line arguments
async function runTests() {
  if (testGroup === 'otp') {
    if (testCommand === 'send') {
      const phone = args[2] || '+84123456789';
      console.log(`Running OTP send test with phone: ${phone}`);
      const response = await manualSendOTPTest(phone);
      console.log('=== Test Result ===');
      console.log('Verification ID:', response.verificationId);
      console.log('SMS Code (dev only):', response.smsCode);
      console.log('===================');
      return;
    } 
    
    if (testCommand === 'verify') {
      const verificationId = args[2];
      const smsCode = args[3];
      
      if (!verificationId || !smsCode) {
        console.error('Usage: ts-node tests/run-tests.ts otp verify <verificationId> <smsCode>');
        process.exit(1);
      }
      
      console.log(`Running OTP verify test with ID: ${verificationId} and code: ${smsCode}`);
      const response = await manualVerifyOTPTest(verificationId, smsCode);
      console.log('=== Test Result ===');
      console.log('Response code:', response.code);
      console.log('User:', response.user ? 'Retrieved successfully' : 'Not found');
      console.log('===================');
      return;
    }
  }
  
  // If we get here, no valid test was specified
  showUsage();
}

// Show usage information
function showUsage() {
  console.log('Available tests:');
  console.log('  ts-node tests/run-tests.ts otp send [phone]');
  console.log('  ts-node tests/run-tests.ts otp verify <verificationId> <smsCode>');
}

// Run tests and handle errors
runTests().catch(error => {
  console.error('Test failed with error:', error.message);
  process.exit(1);
}); 