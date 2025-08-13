import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    reviews?: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <Heart size={18} className="text-gray-600" />
        </button>
        {product.price > 500 && (
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            Premium
          </div>
        )}
      </div>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 hover:text-indigo-600 mb-1 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews || 0})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;