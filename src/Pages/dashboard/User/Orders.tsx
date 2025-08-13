import { useState } from 'react';
import Breadcrumb from '../../../Components/Breadcrumb';

const UserOrders = () => {
  const [orders] = useState([
    {
      id: '#UMKZ-2023-001',
      date: '2023-06-15',
      status: 'Delivered',
      total: 299.99,
      items: [
        { name: 'Ultra HD Tablet Pro', price: 299.99, quantity: 1 }
      ]
    },
    {
      id: '#UMKZ-2023-002',
      date: '2023-06-10',
      status: 'Shipped',
      total: 1299.99,
      items: [
        { name: 'Gaming Laptop Extreme', price: 1299.99, quantity: 1 }
      ]
    }
  ]);

  return (
    <div>
      <Breadcrumb
        items={[
          { name: 'Dashboard', path: '/dashboard' },
          { name: 'My Orders' }
        ]} 
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>
      
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'Shipped' 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                      View
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-900">
                      Track
                    </button>
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

export default UserOrders;