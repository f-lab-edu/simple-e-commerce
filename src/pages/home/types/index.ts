type CategoryType = 'outer' | 'top' | 'pants' | 'onepiece' | 'skirt' | 'underwear';

export interface Category {
  value: CategoryType;
  label: string;
}

export interface Product {
  id: number;
  type: CategoryType;
  thumbnail: string;
  productName: string;
  brandName: string;
  price: number;
  discount: number;
  discountedPrice: number;
}
