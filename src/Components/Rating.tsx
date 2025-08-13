import { useState, useEffect } from 'react';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  reviewCount?: number;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const Rating = ({ 
  value, 
  max = 5, 
  className = '', 
  showValue = true,
  reviewCount,
  animated = false,
  size = 'md',
  interactive = false,
  onRatingChange
}: RatingProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedRating, setSelectedRating] = useState(value);

  const sizeClasses = {
    sm: { star: 14, text: 'text-xs' },
    md: { star: 16, text: 'text-sm' },
    lg: { star: 20, text: 'text-base' }
  };

  const currentSize = sizeClasses[size];

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedValue(prev => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return Math.min(prev + 0.1, value);
          });
        }, 50);
        
        return () => clearInterval(interval);
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setAnimatedValue(value);
    }
  }, [value, animated]);

  const handleStarClick = (rating: number) => {
    if (interactive && onRatingChange) {
      setSelectedRating(rating);
      onRatingChange(rating);
    }
  };

  const handleStarHover = (rating: number) => {
    if (interactive) {
      setHoveredStar(rating);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoveredStar(-1);
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-500';
    if (rating >= 4) return 'text-yellow-500';
    if (rating >= 3) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4) return 'Very Good';
    if (rating >= 3) return 'Good';
    if (rating >= 2) return 'Fair';
    return 'Poor';
  };

  const displayValue = interactive ? (hoveredStar >= 0 ? hoveredStar + 1 : selectedRating) : animatedValue;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Stars */}
      <div 
        className="flex items-center space-x-1"
        onMouseLeave={handleMouseLeave}
      >
        {[...Array(max)].map((_, i) => {
          const filled = i < Math.floor(displayValue);
          const partialFilled = i === Math.floor(displayValue) && displayValue % 1 !== 0;
          const hovered = interactive && hoveredStar >= i;
          
          return (
            <div key={i} className="relative">
              <Star
                size={currentSize.star}
                className={`transition-all duration-300 cursor-pointer transform hover:scale-110 ${
                  filled || hovered
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-300'
                } ${interactive ? 'hover:drop--lg' : ''}`}
                onClick={() => handleStarClick(i + 1)}
                onMouseEnter={() => handleStarHover(i)}
              />
              
              {/* Partial Fill */}
              {partialFilled && (
                <div 
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${(displayValue % 1) * 100}%` }}
                >
                  <Star
                    size={currentSize.star}
                    className="text-yellow-400 fill-yellow-400"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Rating Value and Text */}
      {showValue && (
        <div className="flex items-center space-x-2">
          <span className={`font-semibold ${currentSize.text} ${getRatingColor(displayValue)}`}>
            {displayValue.toFixed(1)}
          </span>
          
          {/* Rating Text */}
          <span className={`${currentSize.text} text-gray-600 font-medium`}>
            {getRatingText(displayValue)}
          </span>
        </div>
      )}

      {/* Review Count */}
      {reviewCount !== undefined && (
        <div className="flex items-center space-x-1 text-gray-500">
          <span className={`${currentSize.text}`}>
            ({reviewCount.toLocaleString()})
          </span>
          {reviewCount > 1000 && (
            <TrendingUp size={currentSize.star - 2} className="text-green-500" />
          )}
        </div>
      )}

      {/* Premium Badges */}
      {value >= 4.8 && reviewCount && reviewCount > 100 && (
        <div className="flex items-center space-x-1">
          <Award size={currentSize.star} className="text-purple-500" />
          <span className={`${currentSize.text} text-purple-600 font-medium`}>
            Top Rated
          </span>
        </div>
      )}

      {/* Verified Reviews Badge */}
      {reviewCount && reviewCount > 50 && (
        <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-full">
          <Users size={currentSize.star - 2} className="text-blue-500" />
          <span className="text-xs text-blue-600 font-medium">
            Verified
          </span>
        </div>
      )}
    </div>
  );
};

export default Rating;