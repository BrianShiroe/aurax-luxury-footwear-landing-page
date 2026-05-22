export interface SubCategoryItem {
  name: string;
  path: string;
}

export interface NavigationGroup {
  title: string;
  items: SubCategoryItem[];
}

export interface CategoryStructure {
  name: string;
  path: string;
  isSale?: boolean;
  hasDropdown?: boolean;
  groups?: NavigationGroup[];
}

export const staticLinks = [
  { name: 'Innovation', path: '/innovation' },
  { name: 'Story', path: '/story' },
];

export const utilityLinks = [
  { name: 'Help', path: '/help' },
  { name: 'Join Us', path: '/join' },
  { name: 'Sign In', path: '/signin' },
];

export const shopCategories: CategoryStructure[] = [
  {
    name: 'New',
    path: '/shop?category=new',
    hasDropdown: true,
    groups: [
      {
        title: 'LATEST DROPS',
        items: [
          { name: 'Phantom Series V2', path: '/shop?search=phantom' },
          { name: 'Kinetic Archive 2026', path: '/shop?search=kinetic' },
          { name: 'Aeroknit Restocks', path: '/shop?search=aeroknit' },
        ],
      },
      {
        title: 'TRENDING CURATIONS',
        items: [
          { name: 'High-Fashion Technical', path: '/shop?tag=techwear' },
          { name: 'Monochrome Pack', path: '/shop?color=monochrome' },
          { name: 'Eco-Polymer Capsules', path: '/shop?material=eco' },
        ],
      },
      {
        title: 'STUDIO FOCUS',
        items: [
          { name: 'Stockholm Conceptual Lab', path: '/story' },
          { name: 'Limited Launch Matrix', path: '/featured' },
        ],
      }
    ]
  },
  {
    name: 'Men',
    path: '/shop?category=men',
    hasDropdown: true,
    groups: [
      {
        title: 'SHOP BY SILHOUETTE',
        items: [
          { name: 'Architectural Sneakers', path: '/shop?category=men&type=sneakers' },
          { name: 'Kinetic Running Modules', path: '/shop?category=men&type=running' },
          { name: 'Structural Boots', path: '/shop?category=men&type=boots' },
          { name: 'Minimalist Sliders', path: '/shop?category=men&type=sliders' },
        ],
      },
      {
        title: 'PERFORMANCE & SPORT',
        items: [
          { name: 'Track & Laboratory Elite', path: '/shop?category=men&type=sport' },
          { name: 'Trail Cross-Engineers', path: '/shop?category=men&type=trail' },
          { name: 'Court Matrix Lows', path: '/shop?category=men&type=basketball' },
        ],
      },
      {
        title: 'PROPRIETARY TECH SPEC',
        items: [
          { name: 'EVO-SOLE™ Carbon Series', path: '/innovation?tech=evo-sole' },
          { name: 'AURAX-KNIT™ Adaptive', path: '/innovation?tech=aurax-knit' },
          { name: 'T-STABILITY™ Plates', path: '/innovation?tech=t-stability' },
        ],
      }
    ]
  },
  {
    name: 'Women',
    path: '/shop?category=women',
    hasDropdown: true,
    groups: [
      {
        title: 'SHOP BY SILHOUETTE',
        items: [
          { name: 'Sculpted High-Platform Matrix', path: '/shop?category=women&type=platforms' },
          { name: 'Avant-Garde Technical Trainers', path: '/shop?category=women&type=trainers' },
          { name: 'Aerodynamic Run Modules', path: '/shop?category=women&type=running' },
          { name: 'Modular Studio Sandals', path: '/shop?category=women&type=sandals' },
        ],
      },
      {
        title: 'CAPSULE COLLECTIONS',
        items: [
          { name: 'The Minimalist Editorial', path: '/shop?collection=editorial' },
          { name: 'Cyber-Knit Future Pack', path: '/shop?collection=cyberknit' },
          { name: 'Earth-Core Raw Textures', path: '/shop?collection=earth' },
        ],
      },
      {
        title: 'ENGINEERING ELEMENTS',
        items: [
          { name: 'Micro-Weight Polymers', path: '/innovation' },
          { name: 'Zero-Shock Compression Plugs', path: '/innovation' },
        ],
      }
    ]
  },
  {
    name: 'Kids',
    path: '/shop?category=kids',
    hasDropdown: true,
    groups: [
      {
        title: 'SIZING GENERATIONS',
        items: [
          { name: 'Older Kids (Sizes 3.5Y - 7Y)', path: '/shop?category=kids&age=older' },
          { name: 'Younger Kids (Sizes 10.5C - 3Y)', path: '/shop?category=kids&age=younger' },
          { name: 'Toddlers & Infants (1C - 10C)', path: '/shop?category=kids&age=toddler' },
        ],
      },
      {
        title: 'PERFORMANCE & DURABILITY',
        items: [
          { name: 'Shield-Knit Everyday Sneaker', path: '/shop?category=kids&type=durable' },
          { name: 'Easy-Lock Speedlace Runners', path: '/shop?category=kids&type=speedlace' },
        ],
      }
    ]
  },
  {
    name: 'Sport',
    path: '/shop?category=sport',
    hasDropdown: true,
    groups: [
      {
        title: 'ATHLETIC DISCIPLINES',
        items: [
          { name: 'Marathon & Road Micro-Pacing', path: '/shop?category=sport&sport=run' },
          { name: 'Technical Trail & Mountain Cleats', path: '/shop?category=sport&sport=trail' },
          { name: 'High-Impact Court Dynamics', path: '/shop?category=sport&sport=court' },
          { name: 'Weightlifting Base Stabilizers', path: '/shop?category=sport&sport=lift' },
        ],
      }
    ]
  },
  {
    name: 'Sportswear',
    path: '/shop?category=sportswear',
    hasDropdown: false
  },
  {
    name: 'Teams',
    path: '/shop?category=national-teams',
    hasDropdown: true,
    groups: [
      {
        title: 'FEDERATION ENGINEERING',
        items: [
          { name: 'Global Track & Field Editions', path: '/shop?category=national-teams&type=track' },
          { name: 'National Lab Collaborations', path: '/shop?category=national-teams&type=collab' },
        ],
      }
    ]
  },
  {
    name: 'Sale',
    path: '/shop?category=sale',
    isSale: true,
    hasDropdown: true,
    groups: [
      {
        title: 'ARCHIVAL REDUCTIONS',
        items: [
          { name: '30% Off Seasonal Rotation', path: '/shop?category=sale&discount=30' },
          { name: '50% Off Final Vault Archive', path: '/shop?category=sale&discount=50' },
        ],
      },
      {
        title: 'FILTER BY SIZING MATRIX',
        items: [
          { name: 'Men’s Clearance Grid', path: '/shop?category=sale&gender=men' },
          { name: 'Women’s Clearance Grid', path: '/shop?category=sale&gender=women' },
        ],
      }
    ]
  },
];