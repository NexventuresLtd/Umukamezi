import { Link } from 'react-router-dom'
import { CheckIcon, XIcon, ClockIcon } from '@heroicons/react/24/outline'

function Orders() {
  // Mock orders data
  const orders = [
    {
      id: 'UMK-1001',
      date: '2023-06-15',
      status: 'delivered',
      total: 1099.99,
      items: [
        {
          id: '1',
          name: 'Professional DSLR Camera',
          price: 999.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        },
        {
          id: '2',
          name: 'Camera Bag',
          price: 100.00,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
      ]
    },
    {
      id: 'UMK-1002',
      date: '2023-06-20',
      status: 'processing',
      total: 599.99,
      items: [
        {
          id: '3',
          name: 'Studio Lighting Kit',
          price: 599.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
      ]
    },
    {
      id: 'UMK-1003',
      date: '2023-05-28',
      status: 'cancelled',
      total: 299.99,
      items: [
        {
          id: '4',
          name: 'Wireless Microphone',
          price: 299.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
      ]
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckIcon className="h-5 w-5 text-green-500" />
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />
      case 'cancelled':
        return <XIcon className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b">
                <div>
                  <span className="font-medium">Order #{order.id}</span>
                  <span className="text-gray-500 text-sm ml-4">Placed on {new Date(order.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-indigo-600">
                          {item.name}
                        </Link>
                        <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-medium">${item.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span className="ml-2 text-sm">
                      {order.status === 'delivered' && 'Delivered on June 18, 2023'}
                      {order.status === 'processing' && 'Expected delivery by June 25, 2023'}
                      {order.status === 'cancelled' && 'Cancelled on June 21, 2023'}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-lg font-bold">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-4">
                  <Link
                    to={`/order/${order.id}`}
                    className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-2 px-4 rounded transition duration-300"
                  >
                    View Details
                  </Link>
                  {order.status === 'delivered' && (
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Buy Again
                    </button>
                  )}
                  {order.status === 'processing' && (
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders;