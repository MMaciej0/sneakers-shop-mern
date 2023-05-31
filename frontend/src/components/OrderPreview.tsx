import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import InfoCard from './cards/InfoCard';
import ItemCard from './cards/ItemCard';
import SummaryCard from './cards/SummaryCard';
import useCartStore from '../hooks/state/useCartStore';

interface OrderPreviewProps {
  changeStep: (index: number) => void;
}

const OrderPreview: React.FC<OrderPreviewProps> = ({ changeStep }) => {
  const navigate = useNavigate();
  const { shippingAddress, paymentMethod } = useCartStore();
  const { fullName, address, city, country, postalCode } = shippingAddress;

  const { cartItems } = useCartStore();

  return (
    <div className="my-16">
      <Heading center heading="Preview Order" />
      <div className="lg:flex">
        <div className="lg:mr-20 lg:w-2/3">
          <div className="flex flex-col gap-2 md:flex-row w-full">
            <InfoCard
              heading="Shipping Address:"
              onClick={() => changeStep(0)}
              label="edit"
            >
              <p className="text-md">
                {fullName}, <br />
                {address}, <br />
                {postalCode} {city}, <br />
                {country}
              </p>
            </InfoCard>
            <InfoCard
              heading="Payment Method:"
              onClick={() => changeStep(1)}
              label="edit"
            >
              <p>{paymentMethod}</p>
            </InfoCard>
          </div>
          <div className="flex flex-col my-4">
            <InfoCard
              heading="Cart:"
              label="edit"
              onClick={() => navigate('/cart')}
            >
              <div className="mt-4">
                {cartItems.map((item, i) => (
                  <ItemCard item={item} key={i} />
                ))}
              </div>
            </InfoCard>
          </div>
        </div>

        <div className="flex flex-col space-y-2 px-4 lg:w-1/3 h-full rounded border shadow-md">
          <SummaryCard btnLabel="Place Order" submitBtn />
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
