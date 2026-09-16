import { Product } from '../types/product';

import anprImg from '../assets/images/products/anpr-camera.jpg';
import breathImg from '../assets/images/products/breath-analyser.jpg';
import cctvImg from '../assets/images/products/cctv-camera.jpg';
import weighingImg from '../assets/images/products/weighing-machine.jpg';
import aiSurveillanceImg from '../assets/images/products/ai-surveillance.svg';
import droneImg from '../assets/images/products/drone-camera.svg';

export type { Product } from '../types/product';

export const INITIAL_PRODUCTS_COUNT = 3;

export const productsData: Product[] = [
  {
    id: 'prod-1',
    title: 'AI ANPR Camera',
    category: 'Vehicle Intelligence',
    subtitle: 'Ready to Harvest | 5-7 day grow cycle',
    description: 'High-speed license plate recognition with deep learning AI OCR engines for automated gates, parking facilities, and toll plazas.',
    image: anprImg,
    bgColor: '#E50914', // Vibrant Orange
    badge: 'AI Powered',
    specs: ['99.4% OCR Accuracy', 'Up to 120 km/h tracking', 'IR Night Vision 50m']
  },
  {
    id: 'prod-2',
    title: 'Breath Analyser',
    category: 'Access & Compliance',
    subtitle: 'Ready to Harvest | 5-7 day grow cycle',
    description: 'Electrochemical fuel-cell sensor providing rapid, precise blood alcohol screening integrated directly with turnstiles and boom barriers.',
    image: breathImg,
    bgColor: '#0052FF', // Electric Royal Blue
    badge: 'Industrial Grade',
    specs: ['< 2s Response Time', 'Automated Gate Interlock', 'Digital Cloud Logging']
  },
  {
    id: 'prod-3',
    title: 'CCTV',
    category: 'Physical Security',
    subtitle: 'Ready to Harvest | 5-7 day grow cycle',
    description: 'Ultra HD 4K IP bullet cameras with intelligent perimeter tripwire detection, edge storage, and rugged weatherproof housing.',
    image: cctvImg,
    bgColor: '#FF6B00', // Vibrant Red
    badge: '24/7 Guard',
    specs: ['4K Ultra HD Sensor', 'IP67 Weatherproof', 'Smart Motion Tripwire']
  },
  {
    id: 'prod-4',
    title: 'AI Surveillance',
    category: 'Autonomous Tracking',
    subtitle: 'Deep-learning edge surveillance with auto-tracking pan-tilt-zoom.',
    description: '360-degree high-speed optical tracking with AI facial recognition, intrusion alert zones, and autonomous patrol routines.',
    image: aiSurveillanceImg,
    bgColor: '#1E1B4B', // Deep Tech Indigo
    badge: 'Auto Tracking',
    specs: ['36x Optical Zoom', 'Facial Recognition', 'Auto Target Tracking']
  },
  {
    id: 'prod-5',
    title: 'Digital Weighing Systems',
    category: 'Industrial Automation',
    subtitle: 'Precision load sensors integrated with ANPR camera gates.',
    description: 'Heavy-duty weighbridge and platform scales with automated Gross/Tare digital sync and direct ERP telemetry logging.',
    image: weighingImg,
    bgColor: '#581C87', // Rich Royal Purple
    badge: 'IoT Connected',
    specs: ['Class III Precision', 'Dual-Channel Load Cells', 'Instant ERP Export']
  },
  {
    id: 'prod-6',
    title: 'Security Patrol Drones',
    category: 'Aerial Intelligence',
    subtitle: 'Autonomous perimeter surveillance and rapid aerial response.',
    description: 'Enterprise quadcopter with 4K thermal optics, automated waypoint missions, and instant incident video streaming to central command.',
    image: droneImg,
    bgColor: '#00695C', // Dark Cyan Teal
    badge: 'Aerial Guard',
    specs: ['45-min Flight Time', 'Thermal Radiometric Optics', 'Autonomous Waypoints']
  }
];
