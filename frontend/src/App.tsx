import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import useThemeChange from './hooks/state/useThemeChange';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from './components/modals/LoginModal';
import useLoginModal from './hooks/state/useLoginModal';

function App() {
  const { theme } = useThemeChange();
  const { isOpen } = useLoginModal();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    // layout
    <div
      className={`text-primary dark:text-primaryBg dark:bg-primary min-h-screen h-full ${
        isOpen && 'overflow-hidden h-screen'
      }`}
    >
      <ToastContainer position="top-center" autoClose={1500} theme="light" />
      <Navbar />
      <main className="container mx-auto px-2 md:px-4">
        <LoginModal />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
