export const ROUTES = {
  HOME: '/',
  PRODUCTS: '#products',
  SERVICES: '#services',
  WORKS: '#featured-works',
  ABOUT: '#who-we-are',
  CONTACT: '#contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
