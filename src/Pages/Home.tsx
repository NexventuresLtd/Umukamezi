import { Link } from 'react-router-dom';
// import HeroImage from '../assets/hero.jpg';
import { HeadphonesIcon, Shield, Truck } from 'lucide-react';
import CategoryCard from '../Components/CategoryCard';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CameraHeroSection from './HeroHome';

const Home = () => {
  // Sample categories data
  const categories = [
    { id: 1, name: 'Tablets', image: 'https://imagenes.elpais.com/resizer/v2/3XVOVO7OWJE3XADYWXIBWNCXW4.jpg?auth=c89ed0d5ee739f44789ab2380c13ffc964a6050272c800a6bcb93ba9496894a8&width=414', count: 42 },
    { id: 2, name: 'Computers', image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg', count: 36 },
    { id: 3, name: 'Cameras', image: 'https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature.jpg', count: 28 },
    { id: 4, name: 'Pro Audio', image: 'https://www.namm.org/sites/default/files/styles/hero_wide/public/2023-01/community_pro_audio-console.JPG?itok=swdfHRWt', count: 15 },
    { id: 5, name: 'Pro Games', image: 'https://cdn.mos.cms.futurecdn.net/oDhm9shBG4xwGexMJfUvzm.jpg', count: 22 },
    { id: 6, name: 'Lightings', image: 'https://www.cirrolite.com/files/Gibraltar_The-Hub-2.jpg', count: 18 },
    { id: 7, name: 'Phones', image: 'https://www.apple.com/v/iphone/home/cd/images/overview/consider_modals/environment/modal_trade_in_variant__ejij0q8th06e_large.jpg', count: 57 },
    { id: 8, name: 'Accessories', image: 'https://keutek.com/cdn/shop/articles/our-favorite-phone-accessories-in-2019-331003.jpg?v=1663816441', count: 89 },
  ];

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Ultra HD Tablet',
      price: 299.99,
      rating: 4.5,
      image: 'https://ae01.alicdn.com/kf/Sce5de371d5854ae09883a4cc97f0b3bcU.jpg'
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      price: 2000.99,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/61FScKvxRFL.jpg'
    },
    {
      id: 3,
      name: 'DSLR Camera',
      price: 799.99,
      rating: 4.7,
      image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 149.99,
      rating: 4.3,
      image: 'https://www.telegraph.co.uk/content/dam/recommended/2025/04/02/TELEMMGLPICT000418652746_17436022641870_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=640'
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Header fixedD={true} />

      {/* Hero Section */}
      <CameraHeroSection />

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-11/12  mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-11/12  mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-11/12  mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-yellow-600 mb-4">
                <Truck size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Worldwide Shipping</h3>
              <p className="text-gray-600">
                We ship to over 100 countries with reliable delivery partners.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-yellow-600 mb-4">
                <Shield size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Security</h3>
              <p className="text-gray-600">
                All transactions are verified by Norton with highest security standards.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-yellow-600 mb-4">
                <HeadphonesIcon size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We're here for you 24/7 via email, text, or call.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;