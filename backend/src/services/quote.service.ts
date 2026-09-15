import Quote, { IQuote } from '../models/Quote';
import { CreateQuoteDto } from '../dtos/quote.dto';

export class QuoteService {
  async createQuote(data: CreateQuoteDto): Promise<IQuote> {
    const quote = await Quote.create({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      requirement: data.requirement,
      message: data.message || '',
    });
    return quote;
  }

  async getAllQuotes(): Promise<IQuote[]> {
    return Quote.find().sort({ createdAt: -1 });
  }
}

export const quoteService = new QuoteService();
export default quoteService;
