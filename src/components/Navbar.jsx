import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
     <div className="flex justify-between items-center px-6 md:px-20 py-4 shadow-md bg-white sticky top-0 z-50">
      
    
      <div className="text-2xl font-bold text-green-600">
        Plantify
      </div>

      
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="/" className="hover:text-green-600 transition">Home</a>
        <a href="/" className="hover:text-green-600 transition">Plants</a>
        <a href="/" className="hover:text-green-600 transition">About</a>
        <a href="/" className="hover:text-green-600 transition">Contact</a>
      </div>

      
      <div className="flex gap-3 md:gap-5 text-lg md:text-xl text-gray-700 cursor-pointer">
        <FaSearch />
        <FaShoppingCart />
        <FaUser />
      </div>

    </div>
  );
}

export default Navbar;