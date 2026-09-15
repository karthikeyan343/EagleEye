import Contact, { IContact } from '../models/Contact';
import { CreateContactDto } from '../dtos/contact.dto';

export class ContactService {
  async createContact(data: CreateContactDto): Promise<IContact> {
    const contact = await Contact.create({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      message: data.message,
    });
    return contact;
  }

  async getAllContacts(): Promise<IContact[]> {
    return Contact.find().sort({ createdAt: -1 });
  }
}

export const contactService = new ContactService();
export default contactService;
