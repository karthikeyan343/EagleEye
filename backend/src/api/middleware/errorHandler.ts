import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utils/logger';
import { sendError } from '../../utils/response';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled Exception:', err);
  sendError(res, err.message || 'An unexpected error occurred', 500);
};

export default errorHandler;
