import { Founder, FoundersNote } from '../types/common';
import anprImg from '../assets/images/products/anpr-camera.jpg';

export type { Founder, FoundersNote } from '../types/common';

export const foundersData: Founder[] = [
  {
    id: 'mukesh',
    name: 'Mukesh',
    role: 'Founder & Chief Physical Security Officer',
    image: anprImg,
  },
  {
    id: 'hari',
    name: 'Hari',
    role: 'Co-Founder and Head of Application',
    image: anprImg,
  }
];

export const foundersNote: FoundersNote = {
  title: 'A Note from our Founders',
  paragraphs: [
    'EagleEye Solution was born out of a deep conviction: true security must be proactive, intelligent, and uncompromising. As physical threats and perimeter complexities multiply, traditional passive recording is no longer enough to safeguard modern enterprises, critical infrastructure, and communities.',
    'We started our journey on the ground, engineering end-to-end CCTV and access control systems with laser precision. Today, we merge cutting-edge AI vision models, automated vehicle recognition, and autonomous patrol technologies with battle-tested hardware architectures.',
    'Every system we deploy is built with a singular objective: empowering security teams with instant clarity and real-time intervention capabilities. We are proud to safeguard Tamil Nadu’s leading organizations and will continue pushing the boundaries of what physical security technology can achieve.'
  ]
};
