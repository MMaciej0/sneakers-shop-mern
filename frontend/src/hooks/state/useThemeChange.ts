import { create } from 'zustand';

interface ThemeChangeProps {
  theme: string;
  setLight: () => void;
  setDark: () => void;
}

const useThemeChange = create<ThemeChangeProps>((set) => ({
  theme: localStorage.getItem('theme')
    ? localStorage.getItem('theme')!
    : window.matchMedia &&
      window.matchMedia('(perefers-color-scheme:dark)').matches
    ? 'dark'
    : 'light',
  setLight: () => {
    localStorage.setItem('theme', 'light');
    set(() => ({ theme: 'light' }));
  },
  setDark: () => {
    localStorage.setItem('theme', 'dark');
    set(() => ({ theme: 'dark' }));
  },
}));

export default useThemeChange;
