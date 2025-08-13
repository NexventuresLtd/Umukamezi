import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products.json';
import ProductCard from '../../Components/ProductCard';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ProductsPage = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Filter products by category if specified
  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.id - b.id; // Default sorting (featured)
    }
  });

  // Filter by price range
  const priceFilteredProducts = sortedProducts.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
    <div className="min-h-screen bg-gray-50">
     
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-yellow-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-yellow-600">
            Products
          </Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <span className="text-gray-900 capitalize">{category}</span>
            </>
          )}
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
          {category || 'All Products'}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="mb-2 flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full mb-2"
              />
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/products"
                    className={`block py-1 ${!category ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/tablets"
                    className={`block py-1 ${category === 'tablets' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/computers"
                    className={`block py-1 ${category === 'computers' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Computers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/cameras"
                    className={`block py-1 ${category === 'cameras' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Cameras
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/pro-audio"
                    className={`block py-1 ${category === 'pro-audio' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Pro Audio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/pro-games"
                    className={`block py-1 ${category === 'pro-games' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Pro Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/lightings"
                    className={`block py-1 ${category === 'lightings' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Lightings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/phones"
                    className={`block py-1 ${category === 'phones' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Phones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/accessories"
                    className={`block py-1 ${category === 'accessories' ? 'text-yellow-600 font-medium' : 'text-gray-600 hover:text-yellow-600'}`}
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Products List */}
          <div className="md:w-3/4">
            {/* Sorting Options */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between items-center">
              <div className="text-gray-600">
                Showing {priceFilteredProducts.length} of {filteredProducts.length} products
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-600">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {priceFilteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {priceFilteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSortOption('featured');
                    setPriceRange([0, 2000]);
                  }}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;