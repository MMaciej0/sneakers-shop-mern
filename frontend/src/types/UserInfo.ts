export interface UserInfo {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  shippingAddress?: ShippingAddress;
  paymentMethod?: string;
}

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface IDUser {
  _id: string;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
}
