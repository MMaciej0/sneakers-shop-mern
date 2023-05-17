import useCartStore from '../hooks/state/useCartStore';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../hooks/state/useUserStore';
import useLoginModal from '../hooks/state/useLoginModal';
import ItemCard from '../components/cards/ItemCard';
import SummaryCard from '../components/cards/SummaryCard';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartStore();
  const { onOpen } = useLoginModal();
  const { user } = useUserStore();

  const handleCheckoutButton = () => {
    if (user) {
      navigate('/placeorder');
    } else {
      onOpen();
    }
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
          <div className="border-b lg:mr-20 lg:w-2/3 text-lg">
            {cartItems.map((item, i) => (
              <ItemCard key={i} item={item} removeBtn changeQtyBtns />
            ))}
          </div>
          <div className="lg:w-1/3">
            <SummaryCard
              btnLabel="Proceed to Checkout"
              btnAction={handleCheckoutButton}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
