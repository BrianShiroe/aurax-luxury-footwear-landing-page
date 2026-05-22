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
  { name: 'About Us', path: '/about' },
  { name: 'Our Story', path: '/story' },
];

export const utilityLinks = [
  { name: 'Help', path: '/help' },
  { name: 'Join Us', path: '/join' },
  { name: 'Sign In', path: '/signin' },
];

export const shopCategories: CategoryStructure[] = [
  {
    name: 'New Arrivals',
    path: '/shop?category=new',
    hasDropdown: true,
    groups: [
      {
        title: 'Featured',
        items: [
          { name: 'All New Arrivals', path: '/shop?category=new' },
          { name: 'Best Sellers', path: '/shop?sort=popular' },
          { name: 'Limited Edition', path: '/shop?type=limited' },
        ],
      },
      {
        title: 'Collections',
        items: [
          { name: 'Running Essentials', path: '/shop?category=running' },
          { name: 'Streetwear', path: '/shop?category=streetwear' },
          { name: 'Everyday Comfort', path: '/shop?type=casual' },
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
        title: 'Shoes',
        items: [
          { name: 'Sneakers', path: '/shop?category=men&type=sneakers' },
          { name: 'Running', path: '/shop?category=men&type=running' },
          { name: 'Boots', path: '/shop?category=men&type=boots' },
          { name: 'Sandals & Slides', path: '/shop?category=men&type=sandals' },
        ],
      },
      {
        title: 'Apparel',
        items: [
          { name: 'Tops', path: '/shop?category=men&type=tops' },
          { name: 'Bottoms', path: '/shop?category=men&type=bottoms' },
          { name: 'Accessories', path: '/shop?category=men&type=accessories' },
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
        title: 'Shoes',
        items: [
          { name: 'Sneakers', path: '/shop?category=women&type=sneakers' },
          { name: 'Running', path: '/shop?category=women&type=running' },
          { name: 'Boots', path: '/shop?category=women&type=boots' },
          { name: 'Sandals & Flats', path: '/shop?category=women&type=sandals' },
        ],
      },
      {
        title: 'Apparel',
        items: [
          { name: 'Tops', path: '/shop?category=women&type=tops' },
          { name: 'Bottoms', path: '/shop?category=women&type=bottoms' },
          { name: 'Accessories', path: '/shop?category=women&type=accessories' },
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
        title: 'Shop By Size',
        items: [
          { name: 'Older Kids', path: '/shop?category=kids&age=older' },
          { name: 'Younger Kids', path: '/shop?category=kids&age=younger' },
          { name: 'Toddlers', path: '/shop?category=kids&age=toddler' },
        ],
      },
      {
        title: 'Categories',
        items: [
          { name: 'All Kids Shoes', path: '/shop?category=kids&type=shoes' },
          { name: 'Activewear', path: '/shop?category=kids&type=activewear' },
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
        title: 'Men’s Sale',
        items: [
          { name: 'Shoes', path: '/shop?category=sale&gender=men&type=shoes' },
          { name: 'Apparel', path: '/shop?category=sale&gender=men&type=apparel' },
        ],
      },
      {
        title: 'Women’s Sale',
        items: [
          { name: 'Shoes', path: '/shop?category=sale&gender=women&type=shoes' },
          { name: 'Apparel', path: '/shop?category=sale&gender=women&type=apparel' },
        ],
      }
    ]
  },
];