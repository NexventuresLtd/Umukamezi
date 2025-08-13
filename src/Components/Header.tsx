import { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Heart} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' }
  ];

  return (
    <>
      {/* Top Banner */}
      {/* <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2 px-4 text-center text-sm animate-pulse">
        <div className="flex items-center justify-center space-x-4 flex-wrap">
          <div className="flex items-center space-x-1">
            <Shield size={14} />
            <span>Verified Security</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <Truck size={14} />
            <span>Worldwide Shipping</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Headphones size={14} />
            <span>24/7 Support</span>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <Award size={14} />
            <span>Low Price Guarantee</span>
          </div>
        </div>
      </div> */}

      <header className={`bg-white -lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? '-xl py-2' : 'py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center space-x-3 text-2xl font-bold text-yellow-600 hover:text-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center text-white font-bold text-lg -lg">
                U
              </div>
              <span className="hidden sm:block bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Umukamezi
              </span>
            </a>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 mx-10 max-w-2xl">
              <div className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? 'transform scale-105' : ''
              }`}>
                <input
                  type="text"
                  placeholder="Search for quality products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 -sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-600 transition-colors duration-300 hover:scale-110">
                  <Search size={20} />
                </button>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6  pl-8">
              {/* Wishlist - Hidden on small screens */}
              <a 
                href="/wishlist" 
                className="hidden md:flex text-gray-700 hover:text-red-500 transition-all duration-300 relative group transform hover:scale-110  "
              >
                <Heart size={22} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  2
                </span>
              </a>

              {/* User Account */}
              <a 
                href="/login" 
                className="text-gray-700 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
              >
                <User size={22} />
              </a>

              {/* Shopping Cart */}
              <a 
                href="/cart" 
                className="text-gray-700 hover:text-yellow-600 relative transition-all duration-300 transform hover:scale-110 group"
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse group-hover:animate-bounce">
                  3
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-gray-700 hover:text-yellow-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-600">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden bg-white border-t -lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[...navItems, { href: '/wishlist', label: 'Wishlist' }].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 font-medium py-2 px-4 rounded-lg hover:bg-yellow-50 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Trust Indicators Bar */}
      {/* <div className="bg-gray-50 border-b py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-8 text-xs text-gray-600">
            <div className="flex items-center space-x-1 hover:text-yellow-600 transition-colors duration-300">
              <Star size={12} className="text-yellow-500" />
              <span className="hidden sm:inline">Rated 4.8/5 by customers</span>
              <span className="sm:hidden">4.8★</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-yellow-600 transition-colors duration-300">
              <Shield size={12} className="text-green-500" />
              <span className="hidden sm:inline">Norton Verified</span>
              <span className="sm:hidden">Secure</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-yellow-600 transition-colors duration-300">
              <Truck size={12} className="text-blue-500" />
              <span className="hidden sm:inline">Free shipping worldwide</span>
              <span className="sm:hidden">Free Ship</span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;