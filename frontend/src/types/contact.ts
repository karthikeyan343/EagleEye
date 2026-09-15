export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  requirement: string;
  message?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  requirement?: string;
  message?: string;
}
