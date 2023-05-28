import { create } from 'zustand';
import { ShippingAddress, UserInfo } from '../../types/UserInfo';

interface UserStoreProps {
  user: UserInfo | null;
  signUp: (newUser: UserInfo) => void;
  signOut: () => void;
  updateUser: (data: Partial<UserInfo>) => void;
  updateShippingAddress: (data: ShippingAddress) => void;
}

const useUserStore = create<UserStoreProps>((set, get) => ({
  user: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,
  signUp: (newUser) => {
    localStorage.setItem('userInfo', JSON.stringify(newUser));
    set({ user: newUser });
  },
  signOut: () => {
    localStorage.removeItem('userInfo');
    set({ user: null });
  },
  updateUser: (data) => {
    const newUser = { ...get().user!, ...data };
    set({ user: newUser });
    localStorage.setItem('userInfo', JSON.stringify(newUser));
  },
  updateShippingAddress: (data) => {
    const newUser = { ...get().user!, shippingAddress: data };
    set({ user: newUser });
    localStorage.setItem('userInfo', JSON.stringify(newUser));
  },
}));

export default useUserStore;
