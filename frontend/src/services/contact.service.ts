import { api } from "./api";
import type { ContactFormData, QuoteFormData } from "../types/contact";
import type { ApiResponse } from "../types/common";

export const contactService = {
  submitContact: async (
    data: ContactFormData
  ): Promise<ApiResponse> => {
    return api.post<ApiResponse>("/contact", {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      message: data.message,
    });
  },

  submitQuote: async (
    data: QuoteFormData
  ): Promise<ApiResponse> => {
    return api.post<ApiResponse>("/quote", {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      requirement: data.requirement,
      message: data.message || "",
    });
  },
};

/*
 * Used by ContactSection.tsx
 * when it calls:
 *
 * await submitContactInquiry(formData);
 */
export const submitContactInquiry = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  return contactService.submitContact(data);
};

export default submitContactInquiry;