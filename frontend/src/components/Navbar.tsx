import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header className="shadow-lg w-full">
      <nav className="container mx-auto p-4 flex justify-between">
        <a href="/" className="text-highlight font-extrabold text-3xl">
          SNEAKERS
        </a>
        <div className="flex items-center justify-center">
          <a
            href="/cart"
            className="px-6 text-4xl relative hover:text-highlight duration-300"
          >
            <AiOutlineShoppingCart />
            <span className="absolute bottom-4 right-3 text-lg font-bold px-2 rounded-full bg-highlight text-black">
              0
            </span>
          </a>
          <a
            href="/signin"
            className="text-lg font-semibold px-6 text-black uppercase tracking-wider hover:text-highlight duration-300"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
