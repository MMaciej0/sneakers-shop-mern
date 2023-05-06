import { create } from 'zustand';
import { Cart, CartItem } from '../../types/Cart';

const useCartStore = create<Cart>((set, get) => ({
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')!)
    : [],
  shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress')!)
    : {},
  paymentMethod: localStorage.getItem('paymentMethod')
    ? JSON.parse(localStorage.getItem('paymentMethod')!)
    : 'paypal',

  addToCart: (newItem: CartItem) => {
    // check if item is already in cart
    const existProduct = get().cartItems.find(
      (item) => item._id === newItem._id && item.size === newItem.size
    );
    // replace existing item to new one with increased quantity or add new item
    const cartItems = existProduct
      ? get().cartItems.map((item) => {
          return item._id === newItem._id && item.size === newItem.size
            ? newItem
            : item;
        })
      : [...get().cartItems, newItem];

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    set({ cartItems: cartItems });
  },

  removeFromCart: (item: CartItem) => {
    const productToRemove = get().cartItems.find(
      (product) => product._id === item._id && product.size === item.size
    );
    const newCartItems = get().cartItems.filter(
      (item) => item !== productToRemove
    );
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    set({ cartItems: newCartItems });
  },
}));

export default useCartStore;
