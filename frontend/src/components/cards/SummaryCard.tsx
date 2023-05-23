import React, { useEffect } from 'react';
import Button from '../Button';
import useCartStore from '../../hooks/state/useCartStore';

interface SummaryCardProps {
  btnLabel?: string;
  btnAction?: () => void;
  submitBtn?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  btnLabel,
  btnAction,
  submitBtn,
}) => {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    calculateTotals,
  } = useCartStore();

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  return (
    <div className="flex flex-col space-y-2 py-8">
      <h3 className="font-bold">Summary:</h3>
      <div className="flex justify-between font-semibold">
        <h3>Products value:</h3>
        <h3>${itemsPrice}</h3>
      </div>
      <div className="flex justify-between font-semibold">
        <h3>Shipping:</h3>
        <h3>${shippingPrice}</h3>
      </div>
      <div className="flex justify-between font-semibold">
        <h3>Tax:</h3>
        <h3>${taxPrice}</h3>
      </div>
      <div className="flex justify-between font-bold pt-6 pb-10 border-t">
        <h3>Total:</h3>
        <h3>${totalPrice}</h3>
      </div>
      {btnLabel && btnAction && <Button label={btnLabel} onClick={btnAction} />}
      {btnLabel && submitBtn && <Button label={btnLabel} type="submit" />}
    </div>
  );
};

export default SummaryCard;
