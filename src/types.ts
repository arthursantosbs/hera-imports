export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  rating: number;
  description: string;
  inStock: boolean;
  features: string[];
  specifications: Record<string, string>;
  flavors: { name: string; stock: number }[];
}
