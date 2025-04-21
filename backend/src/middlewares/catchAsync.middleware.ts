import { Request, Response, NextFunction } from 'express';
import logger from '../common/utils/logger';

interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

const handleErrors = (res: Response, error: any) => {
  const { status = 500, message, stack } = error;
  logger.error(`Error occurred: ${stack}`);
  
  res.status(status).json({
    success: false,
    message: message || 'Internal server error'
  });
};

const CatchAsync = (controller: AsyncRequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      handleErrors(res, error);
    }
  };
};

export default CatchAsync;
