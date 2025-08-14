import { useState } from 'react';
import { ArrowRight, TrendingUp, Eye } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image: string;
    count: number;
    trending?: boolean;
    featured?: boolean;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    window.location.href = `/products/${category.name.toLowerCase()}`;
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl -lg overflow-hidden hover:-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group relative"
    >
      {/* Featured Badge */}
      {category.featured && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full -lg animate-pulse">
          ✨ Featured
        </div>
      )}
      
      {/* Trending Badge */}
      {category.trending && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-2 py-1 rounded-full -lg flex items-center space-x-1">
          <TrendingUp size={12} />
          <span>Hot</span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              {category.name.charAt(0)}
            </div>
          </div>
        )}
        
        <img
          src={category.image}
          alt={category.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-60' : 'opacity-30'
        }`} />
        
        {/* Hover Content */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
        }`}>
          <div className="text-center text-white">
            <Eye className="mx-auto mb-2" size={24} />
            <span className="text-sm font-semibold">Explore Category</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Category Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
          {category.name}
        </h3>
        
        {/* Products Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600 flex items-center space-x-1">
            <span className="font-medium text-yellow-600">{category.count}</span>
            <span>products available</span>
          </p>
          
          {/* View All Link */}
          <div className={`flex items-center space-x-1 text-yellow-600 font-medium transition-all duration-300 ${
            isHovered ? 'transform translate-x-1' : ''
          }`}>
            <span className="text-sm">View All</span>
            <ArrowRight size={16} className={`transition-transform duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r bg-yellow-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isHovered ? `${Math.min((category.count / 50) * 100, 100)}%` : '0%' 
            }}
          ></div>
        </div>
        
        {/* Category Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>In Stock</span>
          <span>{category.count > 20 ? 'High' : category.count > 10 ? 'Medium' : 'Low'} Availability</span>
        </div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered ? '-2xl -yellow-500/20 ring-2 ring-yellow-500/20' : ''
      }`} />
    </div>
  );
};

export default CategoryCard;