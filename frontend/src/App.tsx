import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import useThemeChange from './hooks/state/useThemeChange';

function App() {
  const { theme } = useThemeChange();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    // layout
    <div className="text-primary dark:text-primaryBg dark:bg-primary">
      <Navbar />
      <main className="container mx-auto px-2 md:px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
