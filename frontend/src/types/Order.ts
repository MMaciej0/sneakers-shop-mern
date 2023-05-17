import { CartItem } from './Cart';
import { ShippingAddress, UserInfo } from './UserInfo';

export type Order = {
  _id: string;
  orderItems: CartItem[];
  shippingAdress: ShippingAddress;
  paymentMethod: string;
  user: UserInfo;
  createdAt: string;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};
