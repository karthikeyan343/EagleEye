export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone.trim()) return true; // Optional phone
  const phoneRegex = /^[+]?[0-9]{3,4}[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.trim().replace(/\s+/g, ''));
};

export const isNotEmpty = (val: string, minLength = 1): boolean => {
  return typeof val === 'string' && val.trim().length >= minLength;
};
