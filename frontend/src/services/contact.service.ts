import { api } from './api';
import { ContactFormData, QuoteFormData } from '../types/contact';
import { ApiResponse } from '../types/common';

export const contactService = {
  submitContact: async (data: ContactFormData): Promise<ApiResponse> => {
    return api.post<ApiResponse>('/contact', data);
  },

  submitQuote: async (data: QuoteFormData): Promise<ApiResponse> => {
    return api.post<ApiResponse>('/quote', data);
  },
};

export default contactService;
