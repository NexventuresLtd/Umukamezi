import { useState } from 'react';
import Breadcrumb from '../../../Components/Breadcrumb';
import ProductCard from '../../../Components/ProductCard';
import { Heart } from 'lucide-react';

const UserWishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: 'Ultra HD Tablet Pro',
      price: 299.99,
      rating: 4.5,
      image: 'tablet-pro.jpg',
      reviews: 124
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 149.99,
      rating: 4.3,
      image: 'headphones.jpg',
      reviews: 210
    }
  ]);

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Dashboard', path: '/dashboard' },
          { name: 'Wishlist' }
        ]} 
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h1>
      
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-4">Save items you love for easy access later</p>
          <a
            href="/products"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </a>
        </div>
      )}
    </div>
  );
};

export default UserWishlist;