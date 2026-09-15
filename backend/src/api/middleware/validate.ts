import { Request, Response, NextFunction } from 'express';
import { sendError } from '../../utils/response';

export const validateContact = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, message } = req.body;

  if (!name || !name.trim()) {
    sendError(res, 'Name is required', 400);
    return;
  }

  if (!email || !email.trim()) {
    sendError(res, 'Email is required', 400);
    return;
  }

  if (!message || !message.trim()) {
    sendError(res, 'Message is required', 400);
    return;
  }

  next();
};

export const validateQuote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, requirement } = req.body;

  if (!name || !name.trim()) {
    sendError(res, 'Name is required', 400);
    return;
  }

  if (!email || !email.trim()) {
    sendError(res, 'Email is required', 400);
    return;
  }

  if (!requirement || !requirement.trim()) {
    sendError(res, 'Requirement / solution of interest is required', 400);
    return;
  }

  next();
};
