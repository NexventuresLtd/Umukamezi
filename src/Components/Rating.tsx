import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
}

const Rating = ({ value, max = 5, className = '' }: RatingProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < Math.floor(value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-500">({value.toFixed(1)})</span>
    </div>
  );
};

export default Rating;