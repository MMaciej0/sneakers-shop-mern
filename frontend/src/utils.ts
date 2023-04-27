import { ApiError } from './types/ApiError';
import { Product } from './types/Product';

export const getError = (error: ApiError) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const convertProductToCartItem = (
  product: Product,
  selectedSize: number
) => {
  return {
    _id: product._id,
    name: product.name,
    image: product.image,
    slug: product.slug,
    size: selectedSize,
    stock: product.countInStock.find((stock) => stock.size === selectedSize)!
      .qty,
    price: product.price,
    quantity: 1,
  };
};
