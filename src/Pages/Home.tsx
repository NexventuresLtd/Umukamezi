import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg';
import { HeadphonesIcon, Shield, Truck } from 'lucide-react';
import CategoryCard from '../Components/CategoryCard';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  // Sample categories data
  const categories = [
    { id: 1, name: 'Tablets', image: 'tablet.jpg', count: 42 },
    { id: 2, name: 'Computers', image: 'computer.jpg', count: 36 },
    { id: 3, name: 'Cameras', image: 'camera.jpg', count: 28 },
    { id: 4, name: 'Pro Audio', image: 'audio.jpg', count: 15 },
    { id: 5, name: 'Pro Games', image: 'games.jpg', count: 22 },
    { id: 6, name: 'Lightings', image: 'lighting.jpg', count: 18 },
    { id: 7, name: 'Phones', image: 'phone.jpg', count: 57 },
    { id: 8, name: 'Accessories', image: 'accessories.jpg', count: 89 },
  ];

  // Sample featured products
  const featuredProducts = [
    { id: 1, name: 'Ultra HD Tablet', price: 299.99, rating: 4.5, image: 'tablet1.jpg' },
    { id: 2, name: 'Gaming Laptop', price: 1299.99, rating: 4.8, image: 'laptop1.jpg' },
    { id: 3, name: 'DSLR Camera', price: 799.99, rating: 4.7, image: 'camera1.jpg' },
    { id: 4, name: 'Wireless Headphones', price: 149.99, rating: 4.3, image: 'headphones1.jpg' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover Amazing Products at <span className="text-yellow-600">Umakamezi</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We offer high-quality yet budget-friendly products with excellent customer service
                and friendly support.
              </p>
              <Link
                to="/products"
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={HeroImage}
                alt="Umakamezi Products"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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