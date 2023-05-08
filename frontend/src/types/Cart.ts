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

export interface Cart {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItem: CartItem) => void;
}
