import useCartStore from '../hooks/state/useCartStore';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '../components/Button';
import { CartItem } from '../types/Cart';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, itemsPrice } = useCartStore();

  const handleQuantityChange = (cartItem: CartItem, quantity: number) => {
    addToCart({ ...cartItem, quantity });
  };

  return (
    <div className="max-w-contentContainer mx-auto px-2 py-6">
      <h1 className="text-center text-2xl tracking-wide">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-16 text-center text-xl">
          Your cart is empty.{' '}
          <Link
            className="text-highlight font-semibold tracking-wide hover:underline underline-offset-4 transition"
            to="/"
          >
            Go find your sneakers!
          </Link>
        </p>
      ) : (
        <div className="mt-8 lg:flex">
          <div className="border-b lg:mr-20 lg:w-2/3">
            {cartItems.map((item, i) => (
              <div key={i} className="flex flex-col text-xl border-t">
                <div className="flex justify-between py-4">
                  <Link
                    className="hover:text-highlight transition"
                    to={`/products/${item.slug}`}
                  >
                    <h3>
                      {item.brand} {item.name}
                    </h3>
                  </Link>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="hover:text-highlight transition"
                  >
                    <BsTrash />
                  </button>
                </div>
                <div className="flex pb-4">
                  <div className="max-w-[8rem] rounded overflow-hidden">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="px-4 flex flex-col space-y-2">
                    <h4>Price: ${item.price * item.quantity}</h4>
                    <h4>Selected size: {item.size}</h4>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.stock}
                        className="hover:text-highlight transition disabled:cursor-not-allowed disabled:opacity-25"
                      >
                        <FiPlusCircle size={22} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="hover:text-highlight transition disabled:cursor-not-allowed disabled:opacity-25"
                      >
                        <FiMinusCircle size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2 py-8 lg:w-1/3">
            <h3 className="font-bold">Summary:</h3>
            <div className="flex justify-between font-semibold">
              <h3>Products value:</h3>
              <h3>${itemsPrice}</h3>
            </div>
            <div className="flex justify-between font-semibold">
              <h3>Shipping:</h3>
              <h3>$0</h3>
            </div>
            <div className="flex justify-between font-semibold">
              <h3>Tax:</h3>
              <h3>$0</h3>
            </div>
            <div className="flex justify-between font-bold pt-6 pb-10 border-t">
              <h3>Total:</h3>
              <h3>$0</h3>
            </div>
            <Button label="Proceed to checkout" onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
