export interface CartItem {
  _id: string;
  name: string;
  image: string | undefined;
  slug: string;
  size: number;
  stock: number;
  price: number;
  quantity: number;
  brand: string;
}

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface Cart {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItem: CartItem) => void;
}
