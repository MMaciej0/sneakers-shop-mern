import React from 'react';
import { useGetUserOrders } from '../hooks/fetch/orderHooks';
import Loader from './Loader';
import MessageBox from './MessageBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import InfoCard from './cards/InfoCard';
import { Order } from '../types/Order';

const UserOrderHistoryList = () => {
  const { data: orders, isLoading, error } = useGetUserOrders();

  console.log(orders, isLoading, error);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <MessageBox variant="danger" text={getError(error as ApiError)} />
  ) : (
    <div className="max-w-2xl mx-auto py-10">
      {orders?.map((order: Order) => (
        <InfoCard heading={`Order ID: ${order._id}`}>
          <p>Status: {order.isPaid ? 'In delivery' : 'Pending payment'}</p>
          <p>Items: {order.orderItems.length}</p>
          <p>Total price: {order.itemsPrice}</p>
        </InfoCard>
      ))}
    </div>
  );
};

export default UserOrderHistoryList;
