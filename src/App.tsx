import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductsPage from './Pages/Products';
import UserDashboardHome from './Pages/dashboard/User';
import UserOrders from './Pages/dashboard/User/Orders';
import UserWishlist from './Pages/dashboard/User/Wishlist';
import UserSettings from './Pages/dashboard/User/Settings';
import UserReviews from './Pages/dashboard/User/Reviews';
import AdminDashboardHome from './Pages/dashboard/Admin';
import AdminProducts from './Pages/dashboard/Admin/Products';
import AdminOrders from './Pages/dashboard/Admin/Orders';
import AdminUsers from './Pages/dashboard/Admin/Users';
import AdminAnalytics from './Pages/dashboard/Admin/Analytics';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />

            {/* User Dashboard Routes */}
            <Route path="/dashboard" element={<UserDashboardHome />}>
              <Route index element={<UserDashboardHome />} />
              <Route path="orders" element={<UserOrders />} />
              <Route path="wishlist" element={<UserWishlist />} />
              <Route path="settings" element={<UserSettings />} />
              <Route path="reviews" element={<UserReviews />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminDashboardHome />}>
              <Route index element={<AdminDashboardHome />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
