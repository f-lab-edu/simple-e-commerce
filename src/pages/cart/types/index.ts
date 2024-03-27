import type { Product } from '@/pages/home/types';

export interface CartProduct extends Product {
  quantity: number;
  checked: boolean;
}
