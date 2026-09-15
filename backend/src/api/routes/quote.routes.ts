import { Router } from 'express';
import { quoteController } from '../controllers/quote.controller';
import { validateQuote } from '../middleware/validate';

const router = Router();

router.post('/quote', validateQuote, (req, res) => {
  quoteController.submitQuote(req, res);
});

router.get('/quote', (req, res) => {
  quoteController.getQuotes(req, res);
});

export default router;
