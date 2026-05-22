export interface Product {
  id: string;
  name: string;
  // Use generic string or a broader union for better flexibility
  category: 'men' | 'women' | 'kids' | 'sale' | 'new'; 
  // Expanded subType based on your navigation needs
  subType: 'sneakers' | 'running' | 'boots' | 'sandals' | 'trainers' | 'platforms' | 'tops' | 'bottoms' | 'accessories'; 
  gender: 'men' | 'women' | 'unisex' | 'kids';
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  details: string[];
  isFeatured?: boolean;
  onSale?: boolean;
  isNew?: boolean;
}

// Keep a helper type if you need strict category definitions elsewhere
export type Category = 'men' | 'women' | 'kids' | 'sale' | 'new';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}