import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image: string;
    count: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/products/${category.name.toLowerCase()}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
    >
      <div className="relative h-40">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.count} products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;