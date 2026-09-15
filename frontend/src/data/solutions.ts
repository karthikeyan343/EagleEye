import { ServiceItem } from '../types/solution';

import cctvImg from '../assets/images/products/cctv-camera.jpg';
import anprImg from '../assets/images/products/anpr-camera.jpg';
import breathImg from '../assets/images/products/breath-analyser.jpg';
import weighingImg from '../assets/images/products/weighing-machine.jpg';
import droneImg from '../assets/images/products/drone-camera.svg';
import aiImg from '../assets/images/products/ai-surveillance.svg';

export type { ServiceItem } from '../types/solution';

export const servicesData: ServiceItem[] = [
  {
    id: 'service-cctv',
    title: 'CCTV Surveillance',
    category: 'Commercial & Industrial Security',
    description: "Every facility follows its own security rhythm. Tailored high-definition surveillance architectures configured for continuous clarity, rapid incident retrieval, and impenetrable perimeter control.",
    image: cctvImg,
    bgColor: '#FF6B00',
    capabilities: [
      'CCTV Installation',
      'CCTV Site Survey & Planning',
      'CCTV System Configuration',
      'CCTV Network Setup',
      'Remote CCTV Monitoring Setup',
      'CCTV Recording & Storage Configuration',
      'CCTV Mobile Viewing Setup',
      'Existing CCTV System Upgrade',
      'CCTV Troubleshooting & Repair',
      'CCTV Preventive Maintenance',
      'CCTV System Expansion',
      'CCTV AMC & Technical Support'
    ]
  },
  {
    id: 'service-ai',
    title: 'AI Surveillance',
    category: 'Intelligent Vision & Analytics',
    description: 'Transforming passive video feeds into proactive real-time intelligence with cutting-edge edge AI computing, automated perimeter tripwires, and instant alert dispatch.',
    image: aiImg,
    bgColor: '#0052FF',
    capabilities: [
      'AI Edge Device Deployment',
      'Facial Recognition Setup',
      'Perimeter Intrusion Detection',
      'Crowd & Heatmap Analytics',
      'Object Abandonment Detection',
      'Automated Incident Alerts',
      'Smart PTZ Auto-Tracking',
      'Central Command Integration',
      'Thermal Analytics Tuning',
      'False Alarm Filtering',
      'Behavioral Anomaly Detection',
      'AI System Calibration & AMC'
    ]
  },
  {
    id: 'service-anpr',
    title: 'ANPR Systems',
    category: 'Automated Vehicle Identification',
    description: 'Automated Number Plate Recognition engineered for high-traffic tollgates, gated communities, corporate campuses, and smart logistics checkpoints.',
    image: anprImg,
    bgColor: '#E50914',
    capabilities: [
      'ANPR Camera Installation',
      'Lane & Angle Calibration',
      'Boom Barrier Relay Setup',
      'Vehicle Blacklist/Whitelist Sync',
      'High-Speed Capture Tuning',
      'RFID & ANPR Combo Setup',
      'Parking Management Integration',
      'Toll Gate Automation',
      'Real-Time Audit Logging',
      'Multi-Lane Synchronization',
      'Vehicle OCR Troubleshooting',
      'System Firmware Maintenance'
    ]
  },
  {
    id: 'service-breath',
    title: 'Breath Analyser',
    category: 'Workforce Safety & Gate Interlock',
    description: 'Industrial-grade automated alcohol screening kiosks and handheld sensors designed for zero-tolerance facilities, transport hubs, and manufacturing plants.',
    image: breathImg,
    bgColor: '#0052FF',
    capabilities: [
      'Turnstile Interlock Setup',
      'Kiosk & Handheld Calibration',
      'Fuel-Cell Sensor Maintenance',
      'HR & Attendance API Sync',
      'Instant Violation SMS Alerts',
      'Anti-Circumvention Testing',
      'Shift-Based Screening Policies',
      'Audit Trail Database Sync',
      'Daily Device Health Check',
      'Hygiene Mouthpiece Supply',
      'Firmware Security Patches',
      'Annual Calibration Certification'
    ]
  },
  {
    id: 'service-weighing',
    title: 'Digital Weighing Machines',
    category: 'Precision Industrial Telemetry',
    description: 'Heavy-capacity weighbridge and precision industrial load stations integrated seamlessly with CCTV snapshots and automatic ANPR vehicle ticketing.',
    image: weighingImg,
    bgColor: '#581C87',
    capabilities: [
      'Weighbridge Load Cell Setup',
      'Platform Scale Installation',
      'Gross / Tare Weight Sync',
      'ANPR Camera Ticket Link',
      'ERP & SAP Telemetry Bridge',
      'Driver Self-Service Terminals',
      'Anti-Tampering Diagnostics',
      'Government Stamping Support',
      'Dual Display Indicator Setup',
      'Weight Calibration & Repair',
      'IoT Cloud Sync Config',
      'Comprehensive Weigh AMC'
    ]
  },
  {
    id: 'service-drone',
    title: 'Security Drones',
    category: 'Autonomous Aerial Patrol',
    description: 'Autonomous enterprise UAV security patrols delivering rapid aerial response, high-resolution thermal night-vision, and wide-area perimeter monitoring.',
    image: droneImg,
    bgColor: '#00695C',
    capabilities: [
      'Drone Docking Station Setup',
      'Waypoint Patrol Programming',
      'Thermal Night-Vision Patrols',
      'Live HD Video Streaming',
      'Geofenced Autonomous Flight',
      'First-Responder Dispatch Link',
      'Battery Swap Automation',
      'Weather Monitoring Integration',
      'Aviation Compliance Setup',
      'Payload Gimbal Calibration',
      'Emergency Override Controls',
      'Fleet Maintenance & AMC'
    ]
  }
];

export const solutionsData = servicesData;
