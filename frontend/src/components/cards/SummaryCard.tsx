import React from 'react';
import Button from '../Button';

interface SummaryCardProps {
  btnLabel?: string;
  btnAction?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ btnLabel, btnAction }) => {
  return (
    <div className="flex flex-col space-y-2 py-8">
      <h3 className="font-bold">Summary:</h3>
      <div className="flex justify-between font-semibold">
        <h3>Products value:</h3>
        <h3>$0</h3>
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
      {btnLabel && btnAction && <Button label={btnLabel} onClick={btnAction} />}
    </div>
  );
};

export default SummaryCard;
