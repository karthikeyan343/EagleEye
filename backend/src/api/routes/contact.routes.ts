import { Router } from 'express';
import { contactController } from '../controllers/contact.controller';
import { validateContact } from '../middleware/validate';

const router = Router();

router.post('/contact', validateContact, (req, res) => {
  contactController.submitContact(req, res);
});

router.get('/contact', (req, res) => {
  contactController.getContacts(req, res);
});

export default router;
