export interface UserInfo {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  shippingAddress?: ShippingAddress;
  paymentMethod?: string;
}

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
