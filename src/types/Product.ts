
export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  material: string;
  careInstructions: string;
  sku: string;
  countryOfOrigin: string;
  sustainability: string;
  images: string[];
  colors: ColorOption[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isSale: boolean;
}

export interface ProductSummary {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}
