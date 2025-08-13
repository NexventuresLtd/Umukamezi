import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Umakamezi
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-10">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-2 top-2 text-gray-500 hover:text-indigo-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">
              Products
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-indigo-600">
              FAQ
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                <User size={20} />
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-indigo-600 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;