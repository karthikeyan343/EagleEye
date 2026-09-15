import { NavItem } from '../types/common';

export const navigationLinks: NavItem[] = [
  {
    title: 'Home',
    href: '#hero',
  },
  {
    title: 'Products',
    href: '#products',
  },
  {
    title: 'Our works',
    href: '#featured-works',
  },
  {
    title: 'Insights',
    href: '#who-we-are',
  },
];

export const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Products', href: '#products' },
      { label: 'Services', href: '#services' },
      { label: 'Our Works', href: '#featured-works' },
      { label: 'About Us', href: '#who-we-are' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI ANPR Cameras', href: '#products' },
      { label: 'Breath Analyser Systems', href: '#products' },
      { label: 'CCTV Surveillance', href: '#products' },
      { label: 'AI Edge Analytics', href: '#products' },
      { label: 'Patrol Drones', href: '#products' },
    ],
  },
];
