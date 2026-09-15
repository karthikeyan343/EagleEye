export interface CreateQuoteDto {
  name: string;
  email: string;
  phone?: string;
  requirement: string;
  message?: string;
}
