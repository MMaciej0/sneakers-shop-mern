import { create } from 'zustand';
import { UserInfo } from '../../types/UserInfo';

interface UserStoreProps {
  user: UserInfo | {};
  signUp: (newUser: UserInfo) => void;
}

const useUserStore = create<UserStoreProps>((set) => ({
  user: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : {},
  signUp: (newUser) => {
    localStorage.setItem('userInfo', JSON.stringify(newUser));
    set({ user: newUser });
  },
}));

export default useUserStore;
