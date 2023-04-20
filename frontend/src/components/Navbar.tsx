import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header className="shadow-lg w-full">
      <nav className="container mx-auto py-4 px-2 md:px-4 flex justify-between">
        <a
          href="/"
          className="text-highlight font-extrabold text-2xl sm:text-3xl"
        >
          SNEAKERS
        </a>
        <div className="flex items-center justify-center">
          <a
            href="/cart"
            className="px-6 text-2xl sm:text-4xl relative hover:text-highlight duration-300"
          >
            <AiOutlineShoppingCart />
            <span className="absolute bottom-3 sm:bottom-4 right-5 sm:right-3 text-sm sm:text-lg font-semibold sm:font-bold px-1 sm:px-2 rounded-full bg-highlight text-black">
              0
            </span>
          </a>
          <a
            href="/signin"
            className="text-md sm:text-lg font-semibold px-2 sm:px-4 md:px-6 text-black uppercase tracking-wider hover:text-highlight duration-300"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
