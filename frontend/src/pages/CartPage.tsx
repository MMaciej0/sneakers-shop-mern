import React from 'react';
import useCartStore from '../hooks/state/useCartStore';

const CartPage = () => {
  const { cartItems } = useCartStore();
  console.log(cartItems);
  return <div>CartPage</div>;
};

export default CartPage;
