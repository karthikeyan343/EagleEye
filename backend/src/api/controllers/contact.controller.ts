import { Request, Response } from 'express';
import { contactService } from '../../services/contact.service';
import { sendSuccess, sendError } from '../../utils/response';
import { logger } from '../../utils/logger';

export class ContactController {
  async submitContact(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, phone, message } = req.body;
      const contact = await contactService.createContact({ name, email, phone, message });

      sendSuccess(res, contact, 'Contact request submitted successfully', 201);
    } catch (error) {
      logger.error('Contact submission error:', error);
      sendError(res, 'Failed to submit contact request', 500);
    }
  }

  async getContacts(_req: Request, res: Response): Promise<void> {
    try {
      const contacts = await contactService.getAllContacts();
      sendSuccess(res, contacts, 'Contacts retrieved successfully');
    } catch (error) {
      logger.error('Get contacts error:', error);
      sendError(res, 'Failed to retrieve contacts', 500);
    }
  }
}

export const contactController = new ContactController();
export default contactController;
