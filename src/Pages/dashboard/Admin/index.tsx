import { BarChart, Package, ShoppingBag, User } from 'lucide-react';

const AdminDashboardHome = () => {
  // Sample data
  const stats = {
    totalSales: 45231.45,
    totalOrders: 1245,
    newCustomers: 342,
    productsSold: 2897
  };

  const recentOrders = [
    {
      id: '#UMKZ-2023-156',
      customer: 'Sarah Johnson',
      date: '2023-06-18',
      status: 'Processing',
      total: 299.99
    },
    {
      id: '#UMKZ-2023-155',
      customer: 'Michael Chen',
      date: '2023-06-17',
      status: 'Shipped',
      total: 799.99
    },
    {
      id: '#UMKZ-2023-154',
      customer: 'Emma Wilson',
      date: '2023-06-16',
      status: 'Delivered',
      total: 149.99
    },
    {
      id: '#UMKZ-2023-153',
      customer: 'David Rodriguez',
      date: '2023-06-15',
      status: 'Delivered',
      total: 1299.99
    }
  ];

  const topProducts = [
    { name: 'Gaming Laptop Extreme', sales: 89, revenue: 115699.11 },
    { name: 'Flagship Smartphone Pro', sales: 76, revenue: 68399.24 },
    { name: 'Professional DSLR Camera', sales: 54, revenue: 43199.46 },
    { name: 'Wireless Headphones', sales: 112, revenue: 16799.88 },
    { name: 'Ultra HD Tablet Pro', sales: 68, revenue: 20399.32 }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Sales</h3>
              <p className="text-2xl font-bold">${stats.totalSales.toFixed(2)}</p>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <BarChart size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Orders</h3>
              <p className="text-2xl font-bold">{stats.totalOrders}</p>
              <p className="text-sm text-green-600 mt-1">+8.3% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <ShoppingBag size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">New Customers</h3>
              <p className="text-2xl font-bold">{stats.newCustomers}</p>
              <p className="text-sm text-green-600 mt-1">+5.2% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <User size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Products Sold</h3>
              <p className="text-2xl font-bold">{stats.productsSold}</p>
              <p className="text-sm text-green-600 mt-1">+15.7% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Package size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h2>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <BarChart size={48} className="text-gray-300" />
            <p className="ml-2 text-gray-400">Sales chart will be displayed here</p>
          </div>
        </div>
        
        {/* Top Products */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium mr-3">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.sales} sold • ${product.revenue.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          <a
            href="/admin/orders"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;