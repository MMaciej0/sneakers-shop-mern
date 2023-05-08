import { create } from 'zustand';
import { UserInfo } from '../../types/UserInfo';

interface UserStoreProps {
  user: UserInfo | null;
  signUp: (newUser: UserInfo) => void;
  signOut: () => void;
}

const useUserStore = create<UserStoreProps>((set) => ({
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
}));

export default useUserStore;
