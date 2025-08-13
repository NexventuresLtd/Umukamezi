import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center text-sm mb-6 bg-gradient-to-r from-gray-50 to-yellow-50 px-4 py-3 rounded-lg border border-gray-200 -sm">
      <div className="flex items-center space-x-2">
        {/* Home Icon */}
        <a 
          href="/" 
          className="flex items-center text-gray-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
        >
          <Home size={16} className="hover:text-yellow-600" />
        </a>
        
        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Separator */}
            <ChevronRight 
              size={14} 
              className="text-gray-400 mx-2 animate-pulse" 
            />
            
            {/* Breadcrumb Item */}
            {item.path ? (
              <a
                href={item.path}
                className="text-gray-600 hover:text-yellow-600 font-medium transition-all duration-300 relative group px-2 py-1 rounded-md hover:bg-yellow-50"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <span className="text-gray-900 font-semibold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text  px-2 py-1 rounded-md bg-white -sm border border-yellow-200">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Optional: Back Button */}
      <div className="ml-auto">
        <button
          onClick={() => window.history.back()}
          className="text-gray-500 hover:text-yellow-600 text-xs flex items-center space-x-1 px-3 py-1 rounded-full hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
        >
          <span>← Back</span>
        </button>
      </div>
    </nav>
  );
};

export default Breadcrumb;