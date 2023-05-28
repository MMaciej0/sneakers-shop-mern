import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import useThemeChange from '../hooks/state/useThemeChange';
import useCartStore from '../hooks/state/useCartStore';
import useLoginModal from '../hooks/state/useLoginModal';
import useUserStore from '../hooks/state/useUserStore';
import useRegisterModal from '../hooks/state/useRegisterModal';

const Navbar = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { setLight, setDark, theme } = useThemeChange();
  const { user, signOut } = useUserStore();
  const { cartItems } = useCartStore();
  const { onOpen: onLoginModalOpen } = useLoginModal();
  const { onOpen: onRegisterModalOpen } = useRegisterModal();

  const handleSignOut = () => {
    toast(`See you later ${user?.name || user?.email}.`, { autoClose: 4000 });
    setUserMenuVisible(false);
    signOut();
  };

  const handleLoginModalOpen = () => {
    setUserMenuVisible(false);
    onLoginModalOpen();
  };

  const handleRegisterModalOpen = () => {
    setUserMenuVisible(false);
    onRegisterModalOpen();
  };

  const handleProfileOpen = () => {
    setUserMenuVisible(false);
    navigate('/profile');
  };

  return (
    <header className="shadow-lg w-full dark:border-b-primaryBg/20 dark:border-b-[2px]">
      <nav className="container mx-auto py-4 px-2 md:px-4 flex justify-between">
        <a
          href="/"
          className="text-highlight font-extrabold text-2xl sm:text-3xl"
        >
          SNEAKERS
        </a>
        <div className="flex items-center justify-center space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-10">
          <button className="group relative border-[1px] border-transparent rounded-full p-2 hover:text-highlight hover:shadow-md hover:border-primary/5 duration-300">
            <Link to="/cart">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute text-black font-semibold -top-1 -right-2 px-2 rounded-full bg-highlight group-hover:text-black">
                {cartItems.reduce((a, c) => (a += c.quantity), 0)}
              </span>
            </Link>
          </button>
          <button
            onClick={() => setUserMenuVisible(!userMenuVisible)}
            className={`border-[1px] border-transparent rounded-full p-2 hover:text-highlight hover:shadow-md hover:border-primary/5 duration-300 ${
              userMenuVisible && 'text-highlight shadow-md border-primary/5'
            }`}
          >
            <AiOutlineUser size={25} />
          </button>
          {userMenuVisible && (
            <ul className="absolute z-50 top-16 bg-primaryBg dark:text-primary rounded-lg overflow-hidden shadow-md">
              {user ? (
                <>
                  <li
                    onClick={handleProfileOpen}
                    className="cursor-pointer px-8 py-2 hover:bg-highlight/60 transition"
                  >
                    Profile
                  </li>
                  <li
                    onClick={handleSignOut}
                    className="cursor-pointer px-8 py-2 hover:bg-highlight/60 transition"
                  >
                    Sign out
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={handleRegisterModalOpen}
                    className="cursor-pointer px-8 py-2 hover:bg-highlight/60 transition"
                  >
                    Register
                  </li>
                  <li
                    onClick={handleLoginModalOpen}
                    className="cursor-pointer px-8 py-2 hover:bg-highlight/60 transition"
                  >
                    Login
                  </li>
                </>
              )}
            </ul>
          )}

          {
            <button className="border-[1px] border-transparent rounded-full p-2 hover:text-highlight hover:shadow-md hover:border-primary/5 duration-300">
              {theme === 'light' ? (
                <BsFillMoonFill size={25} onClick={setDark} className="" />
              ) : (
                <BsSun size={25} onClick={setLight} />
              )}
            </button>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
