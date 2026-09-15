export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FoundedInfo {
  year: string;
  title: string;
  description: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface FoundersNote {
  title: string;
  paragraphs: string[];
}

export interface NavItem {
  title: string;
  href: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'admin' | 'guest';
}
