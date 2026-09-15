import { Request, Response } from 'express';
import { quoteService } from '../../services/quote.service';
import { sendSuccess, sendError } from '../../utils/response';
import { logger } from '../../utils/logger';

export class QuoteController {
  async submitQuote(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, phone, requirement, message } = req.body;
      const quote = await quoteService.createQuote({ name, email, phone, requirement, message });

      sendSuccess(res, quote, 'Quote request submitted successfully', 201);
    } catch (error) {
      logger.error('Quote submission error:', error);
      sendError(res, 'Failed to submit quote request', 500);
    }
  }

  async getQuotes(_req: Request, res: Response): Promise<void> {
    try {
      const quotes = await quoteService.getAllQuotes();
      sendSuccess(res, quotes, 'Quotes retrieved successfully');
    } catch (error) {
      logger.error('Get quotes error:', error);
      sendError(res, 'Failed to retrieve quotes', 500);
    }
  }
}

export const quoteController = new QuoteController();
export default quoteController;
