export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  stock: number;
  colors?: string[];
  sizes?: string[];
  features?: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: {
    product: Product;
    quantity: number;
    price: number;
  }[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  reviews: number;
  wishlist: number[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}