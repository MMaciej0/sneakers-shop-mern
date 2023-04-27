import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetProductQuery } from '../hooks/productsHooks';
import MessageBox from '../components/MessageBox';
import { convertProductToCartItem, getError } from '../utils';
import { ApiError } from '../types/ApiError';
import Loader from '../components/Loader';
import Button from '../components/Button';
import { useState } from 'react';
import useCartStore from '../hooks/state/useCartStore';
import { Product, ProductStock } from '../types/Product';

const SingleProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<ProductStock | null>(null);
  const { slug } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(slug!);
  const { addToCart, cartItems } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    const productInCart = cartItems.find(
      (item) => item._id === product._id && item.size === selectedSize?.size
    );
    const quantity = productInCart ? productInCart.quantity + 1 : 1;
    if (quantity > selectedSize!.qty) {
      toast.warn('Sorry.Product is out of stock.');
      return;
    }
    const cartItem = convertProductToCartItem(product, selectedSize!.size);
    cartItem.quantity = quantity;
    addToCart(cartItem);
    toast('Sneakers added to cart!');
    navigate('/');
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <MessageBox variant="danger" text={getError(error as ApiError)} />
  ) : !product ? (
    <MessageBox variant="danger" text="Product not found." />
  ) : (
    <div className="max-w-contentContainer mx-auto px-2 py-6 lg:grid grid-cols-2">
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-full object-contain md:max-h-[50vh] lg:max-h-[80vh]"
          src={product.image}
          alt={product.name}
        />
      </div>
      {/* product info */}
      <div className="md:ml-6">
        <ul className="flex flex-col justify-center space-y-2 py-4">
          <li className="border-b-primary/20 dark:border-b-primaryBg/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-bold">
            <h1>{product.name}</h1>
          </li>
          <li className="border-b-primary/20 dark:border-b-primaryBg/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-semibold">
            <h3>{product.brand}</h3>
          </li>
          <li className="border-b-primary/20 dark:border-b-primaryBg/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-semibold">
            <h3>${product.price}</h3>
          </li>
          <li className="border-b-primary/20 dark:border-b-primaryBg/20 border-b-[2px] w-full py-2 text-lg md:text-xl">
            <h3>{product.description}</h3>
          </li>
        </ul>
        {/* product action */}
        <div className="flex flex-col justify-center py-6">
          <h2 className="text-xl mb-4">Available Sizes:</h2>
          <div className="flex space-x-2 flex-wrap mb-10">
            {product.countInStock.map((item, i) => (
              <Button
                small
                key={i}
                label={item.size.toString()}
                onClick={() => setSelectedSize(item)}
                active={item.size === selectedSize?.size}
                outline
                disabled={item.qty === 0}
              />
            ))}
          </div>
          <Button
            label="Add to cart"
            onClick={() => handleAddToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
