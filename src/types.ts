export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  details: string[];
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type Category = 'Running' | 'Streetwear' | 'Luxury Sneakers' | 'Minimal Essentials' | 'Performance' | 'Limited Edition';
