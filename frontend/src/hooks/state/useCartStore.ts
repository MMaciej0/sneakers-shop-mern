import { create } from 'zustand';
import { Cart, CartItem } from '../../types/Cart';
import { ShippingAddress } from '../../types/UserInfo';

type CartStoreProps = Cart & {
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItem: CartItem) => void;
  calculateTotals: () => void;
  updateShippingAddress: (shippingAddress: ShippingAddress) => void;
  clearCart: () => void;
  updatePaymentMethod: (method: string) => void;
};

const useCartStore = create<CartStoreProps>((set, get) => ({
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')!)
    : [],
  shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress')!)
    : null,
  paymentMethod: '',

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

  calculateTotals: () => {
    const round2 = (number: number) => Math.round(number * 100) / 100;
    const newItemsPrice = round2(
      get().cartItems.reduce((a, c) => (a += c.quantity * c.price), 0)
    );
    const newShippingPrice = newItemsPrice > 200 ? 0 : 15;
    const newTax = round2(newItemsPrice * 0.18);
    const newTotal = round2(newItemsPrice + newShippingPrice + newTax);
    set((state) => ({
      ...state,
      itemsPrice: newItemsPrice,
      shippingPrice: newShippingPrice,
      taxPrice: newTax,
      totalPrice: newTotal,
    }));
  },

  updateShippingAddress: (shippingAddress: ShippingAddress) => {
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
    set({ shippingAddress: shippingAddress });
  },

  updatePaymentMethod: (paymentMethod: string) => {
    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
    set({ paymentMethod: paymentMethod });
  },

  clearCart: () => {
    localStorage.removeItem('cartItems');
    set({ cartItems: [] });
  },
}));

export default useCartStore;
