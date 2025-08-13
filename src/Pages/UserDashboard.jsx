import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { 
  UserCircleIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  ClockIcon, 
  CogIcon, 
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'

function UserDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('orders')

  useEffect(() => {
    // Load user from localStorage
    const userData = JSON.parse(localStorage.getItem('user'))
    if (!userData) {
      navigate('/login')
    } else {
      setUser(userData)
    }

    // Set active tab based on route
    const path = location.pathname.split('/').pop()
    if (path === 'dashboard') {
      setActiveTab('orders')
    } else {
      setActiveTab(path)
    }
  }, [location, navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  if (!user) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 rounded-full p-2 mr-4">
                <UserCircleIcon className="h-10 w-10 text-indigo-600" />
              </div>
              <div>
                <h2 className="font-bold">{user.firstName} {user.lastName}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            <nav className="space-y-1">
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-3 rounded-lg ${activeTab === 'orders' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <ShoppingBagIcon className="h-5 w-5 mr-3" />
                Orders
              </Link>
              <Link
                to="/dashboard/wishlist"
                className={`flex items-center px-4 py-3 rounded-lg ${activeTab === 'wishlist' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <HeartIcon className="h-5 w-5 mr-3" />
                Wishlist
              </Link>
              <Link
                to="/dashboard/recently-viewed"
                className={`flex items-center px-4 py-3 rounded-lg ${activeTab === 'recently-viewed' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <ClockIcon className="h-5 w-5 mr-3" />
                Recently Viewed
              </Link>
              <Link
                to="/dashboard/settings"
                className={`flex items-center px-4 py-3 rounded-lg ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <CogIcon className="h-5 w-5 mr-3" />
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
                Logout
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard;