import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../types/Cart';
import { BsTrash } from 'react-icons/bs';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import useCartStore from '../../hooks/state/useCartStore';

interface ItemCardProps {
  item: CartItem;
  removeBtn?: boolean;
  changeQtyBtns?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  removeBtn,
  changeQtyBtns,
}) => {
  const { addToCart, removeFromCart } = useCartStore();

  const handleQuantityChange = (cartItem: CartItem, quantity: number) => {
    addToCart({ ...cartItem, quantity });
  };

  return (
    <div className="flex flex-col border-t">
      <div className="flex justify-between py-4">
        <Link
          className="hover:text-highlight transition"
          to={`/products/${item.slug}`}
        >
          <h3>
            {item.brand} {item.name}
          </h3>
        </Link>
        {removeBtn && (
          <button
            onClick={() => removeFromCart(item)}
            className="hover:text-highlight transition"
          >
            <BsTrash />
          </button>
        )}
      </div>
      <div className="flex pb-4">
        <div className="max-w-[8rem] rounded overflow-hidden">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="px-4 flex flex-col space-y-2">
          <h4>Price: ${item.price * item.quantity}</h4>
          <h4>Selected size: {item.size}</h4>
          {changeQtyBtns ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(item, item.quantity + 1)}
                disabled={item.quantity === item.stock}
                className="hover:text-highlight transition disabled:cursor-not-allowed disabled:opacity-25"
              >
                <FiPlusCircle size={22} />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item, item.quantity - 1)}
                disabled={item.quantity === 1}
                className="hover:text-highlight transition disabled:cursor-not-allowed disabled:opacity-25"
              >
                <FiMinusCircle size={22} />
              </button>
            </div>
          ) : (
            <h4>Quantity: {item.quantity}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
