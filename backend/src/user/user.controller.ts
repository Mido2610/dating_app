import { Request, Response } from 'express';
import AuthService from './user.service';
import { generateOTPCode } from '../common/utils/otpGenerator';

class AuthController {
  register = async (req: Request, res: Response) => {
    const user = await AuthService.register(req.body);
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
    });
  };
}

export default new AuthController();