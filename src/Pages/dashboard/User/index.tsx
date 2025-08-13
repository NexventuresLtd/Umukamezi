import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, CreditCard } from 'lucide-react';

const UserDashboardHome = () => {
  // Sample data
  const recentOrders = [
    {
      id: '#UMKZ-2023-001',
      date: '2023-06-15',
      status: 'Delivered',
      total: 299.99,
      items: 1
    },
    {
      id: '#UMKZ-2023-002',
      date: '2023-06-10',
      status: 'Shipped',
      total: 1299.99,
      items: 2
    },
    {
      id: '#UMKZ-2023-003',
      date: '2023-05-28',
      status: 'Delivered',
      total: 149.99,
      items: 1
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Total Orders</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Wishlist Items</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <Star size={24} />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Reviews</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gray-100 text-gray-600 mr-4">
              <CreditCard size={24} />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Total Spent</h3>
              <p className="text-2xl font-bold">$2,149.97</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          <Link
            to="/dashboard/orders"
            className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
          >
            View All
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {recentOrders.map((order) => (
            <div key={order.id} className="px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-2 md:mb-0">
                  <p className="text-sm font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()} • {order.items} item{order.items > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-900 mr-6">
                    ${order.total.toFixed(2)}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Shipped'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Summary */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Account Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-3">Personal Information</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Name:</span> John Doe
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> john.doe@example.com
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Member Since:</span> January 2022
                </p>
              </div>
              <Link
                to="/dashboard/settings"
                className="inline-block mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-500"
              >
                Edit Profile
              </Link>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-3">Default Shipping Address</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">123 Main Street</p>
                <p className="text-sm text-gray-600">Apartment 4B</p>
                <p className="text-sm text-gray-600">New York, NY 10001</p>
                <p className="text-sm text-gray-600">United States</p>
              </div>
              <Link
                to="/dashboard/settings"
                className="inline-block mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-500"
              >
                Manage Addresses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;