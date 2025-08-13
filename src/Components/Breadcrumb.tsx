import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.path ? (
            <Link to={item.path} className="hover:text-indigo-600">
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-900">{item.name}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;