import { Request, Response } from 'express';
declare class AuthController {
    register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
