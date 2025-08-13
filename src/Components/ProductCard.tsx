import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Share2, TrendingUp, Zap } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    reviews?: number;
    inStock?: boolean;
    isNew?: boolean;
    isBestseller?: boolean;
    discount?: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleViewProduct = () => {
    window.location.href = `/products/${product.id}`;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
        {product.isNew && (
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse flex items-center space-x-1">
            <Zap size={10} />
            <span>New</span>
          </div>
        )}
        {product.isBestseller && (
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center space-x-1">
            <TrendingUp size={10} />
            <span>Bestseller</span>
          </div>
        )}
        {discountPercentage > 0 && (
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
            -{discountPercentage}%
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden" onClick={handleViewProduct}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              U
            </div>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
          </button>
          
          <button className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
            <Share2 size={16} />
          </button>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleViewProduct}
            className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Eye size={16} />
            <span>Quick View</span>
          </button>
        </div>

        {/* Stock Indicator */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <h3 
          className="font-semibold text-gray-900 hover:text-yellow-600 mb-2 line-clamp-2 cursor-pointer transition-colors duration-300"
          onClick={handleViewProduct}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`transition-colors duration-300 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviews || 0} reviews)
          </span>
          <span className="text-xs text-gray-400 ml-auto">
            {product.rating.toFixed(1)}★
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {discountPercentage > 0 && (
            <span className="text-xs text-green-600 font-semibold">
              Save ${((product.originalPrice || product.price) - product.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
            addedToCart
              ? 'bg-green-500 text-white'
              : product.inStock
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:from-yellow-600 hover:to-yellow-800 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={18} />
          <span>
            {addedToCart 
              ? '✓ Added to Cart!' 
              : product.inStock 
              ? 'Add to Cart' 
              : 'Out of Stock'
            }
          </span>
        </button>

        {/* Stock Status */}
        {product.inStock && (
          <div className="mt-2 text-center">
            <span className="text-xs text-green-600 flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>In Stock & Ready to Ship</span>
            </span>
            </div>
          
        )}
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
        isHovered ? 'shadow-2xl shadow-yellow-500/20 ring-2 ring-yellow-500/20' : ''
      }`} />
    </div>
  );
};

export default ProductCard;