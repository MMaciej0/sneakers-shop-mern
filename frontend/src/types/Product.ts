export type Product = {
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  countInStock: ProductStock[];
  description: string;
  rating: number;
  numReviews: number;
};

export type ProductStock = {
  size: number;
  qty: number;
};
