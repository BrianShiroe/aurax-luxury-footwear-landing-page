import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AERO-X1',
    category: 'Performance',
    price: 340,
    description: 'Ultra-lightweight performance runner designed for speed and agility. Features our proprietary carbon-fiber plate technology.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#FFFFFF', '#111111', '#B0B0B0'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    details: ['Engineered knit upper', 'React-Z cushioning', '3 degree offset', 'Reinforced heel'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'AURAX MONO',
    category: 'Minimal Essentials',
    price: 280,
    description: 'The ultimate minimalist sneaker. Hand-crafted from Italian pebble-grain leather with a focus on silhouette and pure form.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#000000', '#F5F5F7'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    details: ['Italian calfskin', 'Margom rubber sole', 'Hand-stitched construction', 'Minimal branding'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'VOID-TECH',
    category: 'Streetwear',
    price: 450,
    description: 'Futuristic technical sneaker with architectural elements and multi-layered cushioning system.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#111111', '#Silver'],
    sizes: ['8', '9', '10', '11', '12'],
    details: ['Gore-Tex internal membrane', 'Vibram outsole', 'Modular design', 'Limited release'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'APEX RUNNER',
    category: 'Running',
    price: 260,
    description: 'High-rebound cushioning meets sleek aesthetic. The perfect balance for long distance and daily wear.',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#E0E0E0', '#111111'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    details: ['Breathable mesh', 'TPU midfoot support', 'Continental outsole', 'Sustainability focused'],
  },
  {
    id: '5',
    name: 'REIGN L-E',
    category: 'Limited Edition',
    price: 890,
    description: 'Our most exclusive piece. Featuring rare materials and a unique collaborative design approach.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#D4D4D8', '#111111'],
    sizes: ['9', '10', '11'],
    details: ['Numbered production', 'Premium packaging', 'VIP authentication', 'Lifetime warranty'],
  },
  {
    id: '6',
    name: 'NOVA LUX',
    category: 'Luxury Sneakers',
    price: 520,
    description: 'Where high-fashion meet athletic DNA. Sleek, polished, and unmistakably premium.',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: ['#FFFFFF', '#000000'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    details: ['Nappa leather', 'Memory foam insole', 'Gold-leaf accents', 'Luxe dustbag included'],
  }
];

export const CATEGORIES = [
  'All',
  'Running',
  'Streetwear',
  'Luxury Sneakers',
  'Minimal Essentials',
  'Performance',
  'Limited Edition'
];
