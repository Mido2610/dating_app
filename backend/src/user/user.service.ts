import { RegisterRequest } from "src/proto/generated/user/RegisterRequest";
import * as grpc from "@grpc/grpc-js";
import bcrypt from 'bcryptjs';


class UserService {
  static async registerUser(request: RegisterRequest): Promise<void> {
    const { email, password } = request;
    // Simulate user registration logic
    // Here you would typically hash the password and save the user to the database
    // For demonstration, we are just logging the user details
    // Hash the password
    if (!password) {
      throw new Error("Password is required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user to the database (simulated)
    const user = {
      email,
      password: hashedPassword,
    };
  }
}

export default UserService;