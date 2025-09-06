export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  stock: number;
  featured?: boolean;
  limited?: boolean;
  new?: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    notes?: string;
  };
  total: number;
  status: 'new' | 'processing' | 'shipped' | 'delivered' | 'returned';
  paymentMethod: 'cod' | 'online';
  createdAt: Date;
  trackingNumber?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  orders: Order[];
}