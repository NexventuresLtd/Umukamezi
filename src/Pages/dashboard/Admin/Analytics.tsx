import { useState } from 'react';
import Breadcrumb from '../../../Components/Breadcrumb';
import { PieChart, LineChart, Download } from 'lucide-react';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [chartType, setChartType] = useState('sales');

  const stats = {
    totalSales: 45231.45,
    totalOrders: 1245,
    newCustomers: 342,
    avgOrderValue: 145.67,
    conversionRate: 3.2
  };

  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Admin', path: '/admin' },
          { name: 'Analytics' }
        ]} 
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h1>
      
      {/* Time Range Selector */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('week')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === 'week' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === 'month' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange('quarter')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === 'quarter' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            Quarter
          </button>
          <button
            onClick={() => setTimeRange('year')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === 'year' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            Year
          </button>
        </div>
        <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Sales</h3>
          <p className="text-2xl font-bold">${stats.totalSales.toFixed(2)}</p>
          <p className="text-sm text-green-600 mt-1">+12.5% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Orders</h3>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
          <p className="text-sm text-green-600 mt-1">+8.3% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">New Customers</h3>
          <p className="text-2xl font-bold">{stats.newCustomers}</p>
          <p className="text-sm text-green-600 mt-1">+5.2% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Avg. Order Value</h3>
          <p className="text-2xl font-bold">${stats.avgOrderValue.toFixed(2)}</p>
          <p className="text-sm text-green-600 mt-1">+2.1% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
          <p className="text-2xl font-bold">{stats.conversionRate}%</p>
          <p className="text-sm text-green-600 mt-1">+0.4% from last {timeRange}</p>
        </div>
      </div>

      {/* Chart Type Selector */}
      <div className="mb-6 flex space-x-2">
        <button
          onClick={() => setChartType('sales')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            chartType === 'sales' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Sales
        </button>
        <button
          onClick={() => setChartType('orders')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            chartType === 'orders' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setChartType('customers')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            chartType === 'customers' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          Customers
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {chartType === 'sales' && 'Sales Overview'}
            {chartType === 'orders' && 'Orders Overview'}
            {chartType === 'customers' && 'Customer Acquisition'}
          </h2>
          <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
            <LineChart size={48} className="text-gray-300" />
            <p className="ml-2 text-gray-400">
              {chartType === 'sales' && 'Sales chart will be displayed here'}
              {chartType === 'orders' && 'Orders chart will be displayed here'}
              {chartType === 'customers' && 'Customers chart will be displayed here'}
            </p>
          </div>
        </div>
        
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {chartType === 'sales' && 'Sales by Category'}
            {chartType === 'orders' && 'Orders by Category'}
            {chartType === 'customers' && 'Customers by Source'}
          </h2>
          <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
            <PieChart size={48} className="text-gray-300" />
            <p className="ml-2 text-gray-400">
              {chartType === 'sales' && 'Sales pie chart will be displayed here'}
              {chartType === 'orders' && 'Orders pie chart will be displayed here'}
              {chartType === 'customers' && 'Customers pie chart will be displayed here'}
            </p>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Top Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gaming Laptop Extreme
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Computers
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  89
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $115,699.11
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Flagship Smartphone Pro
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Phones
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  76
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $68,399.24
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Professional DSLR Camera
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Cameras
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  54
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $43,199.46
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;