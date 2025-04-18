import { Request, Response, NextFunction } from 'express';
interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        email: string;
    };
}
declare const authenticate: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response | void;
export default authenticate;
