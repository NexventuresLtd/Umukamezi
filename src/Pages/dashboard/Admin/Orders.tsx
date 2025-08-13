import { useState } from 'react';
import Breadcrumb from '../../../Components/Breadcrumb';
import { formatCurrency, formatDate } from '../../../utils';

const AdminOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: '#UMKZ-2023-156',
      customer: 'Sarah Johnson',
      date: '2023-06-18',
      status: 'Processing',
      total: 299.99,
      items: 1,
      payment: 'Credit Card'
    },
    {
      id: '#UMKZ-2023-155',
      customer: 'Michael Chen',
      date: '2023-06-17',
      status: 'Shipped',
      total: 799.99,
      items: 2,
      payment: 'PayPal'
    },
    {
      id: '#UMKZ-2023-154',
      customer: 'Emma Wilson',
      date: '2023-06-16',
      status: 'Delivered',
      total: 149.99,
      items: 1,
      payment: 'Credit Card'
    }
  ]);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Admin', path: '/admin' },
          { name: 'Orders' }
        ]} 
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Orders</h1>
      
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
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
                  Payment
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
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(order.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(order.total)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.payment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`block w-full pl-3 pr-10 py-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        order.status === 'Processing'
                          ? 'border-yellow-300 bg-yellow-50 focus:ring-yellow-500'
                          : order.status === 'Shipped'
                          ? 'border-gray-300 bg-gray-50 focus:ring-gray-500'
                          : 'border-green-300 bg-green-50 focus:ring-green-500'
                      }`}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Invoice
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

export default AdminOrders;