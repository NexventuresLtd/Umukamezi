import { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Truck, 
  Shield, 
  Headphones, 
  Map, 
  Mail, 
  Phone, 
  Award,
  Clock,
  Users,
  Globe,
  ArrowUp,
  Heart,
  Star,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [setIsSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-8 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Latest Trends!</h3>
            <p className="text-yellow-100 mb-6">Subscribe to get exclusive offers and be the first to know about new products</p>
            <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-yellow-600 px-6 py-3 rounded-r-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                {isSubscribed ? <CheckCircle size={20} /> : 'Subscribe'}
              </button>
            </form>
            {isSubscribed && (
              <p className="mt-2 text-yellow-100 animate-bounce">✨ Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                  U
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Umakamezi
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We offer high-quality yet budget-friendly products with excellent customer service. 
                Your satisfaction is our top priority as we bring you the latest trends worldwide.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <Users className="mx-auto mb-1 text-yellow-400" size={20} />
                  <div className="text-xl font-bold">50K+</div>
                  <div className="text-xs text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <Globe className="mx-auto mb-1 text-blue-400" size={20} />
                  <div className="text-xl font-bold">100+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500' },
                  { icon: Twitter, color: 'hover:text-sky-400', bg: 'hover:bg-sky-400' },
                  { icon: Instagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500' },
                  { icon: Linkedin, color: 'hover:text-blue-600', bg: 'hover:bg-blue-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} ${social.bg} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Shop' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
                { href: '/reviews', label: 'Customer Reviews' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Customer Service
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/faq', label: 'FAQ' },
                { href: '/shipping', label: 'Shipping Policy' },
                { href: '/returns', label: 'Easy Returns' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms & Conditions' },
                { href: '/size-guide', label: 'Size Guide' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* 24/7 Support Highlight */}
            <div className="mt-6 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600">
              <div className="flex items-center space-x-3 mb-2">
                <Headphones className="text-green-400" size={20} />
                <span className="font-semibold text-green-400">24/7 Support</span>
              </div>
              <p className="text-gray-300 text-sm">
                We're here for you anytime via email, text, or call. Your satisfaction is guaranteed!
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start group">
                <Map className="mr-3 mt-1 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={18} />
                <div>
                  <span className="block hover:text-white transition-colors duration-300">
                    123 Tech Street, Digital City, 10001
                  </span>
                  <span className="text-xs text-gray-500">Worldwide Shipping Available</span>
                </div>
              </li>
              <li className="flex items-start group">
                <Mail className="mr-3 mt-1 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={18} />
                <div>
                  <a href="mailto:support@umakamezi.com" className="hover:text-white transition-colors duration-300">
                    support@umakamezi.com
                  </a>
                  <span className="block text-xs text-gray-500">Quick Response Guaranteed</span>
                </div>
              </li>
              <li className="flex items-start group">
                <Phone className="mr-3 mt-1 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={18} />
                <div>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                  <span className="block text-xs text-gray-500">Mon-Sun: 24/7 Available</span>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="text-yellow-400" size={20} />
                <span className="font-semibold text-yellow-400">Always Open</span>
              </div>
              <p className="text-gray-300 text-sm">
                Our online store and customer support are available 24/7 to serve you better.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Norton Verified', desc: 'Secure Shopping', color: 'text-green-400' },
              { icon: Truck, title: 'Free Shipping', desc: 'Worldwide Delivery', color: 'text-blue-400' },
              { icon: Award, title: 'Low Price Guarantee', desc: 'Best Deals', color: 'text-yellow-400' },
              { icon: Heart, title: 'Customer Love', desc: 'Rated 4.8/5 Stars', color: 'text-red-400' }
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 transform group-hover:scale-110 ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        {/* <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-center text-lg font-semibold mb-6">We Accept</h4>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: CreditCard, label: 'All Major Cards' },
              { icon: Shield, label: 'Secure Payment' },
              { icon: CheckCircle, label: 'Verified Checkout' }
            ].map((payment, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <payment.icon size={32} />
                <span className="text-sm font-medium">{payment.label}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Umakamezi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <Heart className="inline w-3 h-3 text-red-500 mx-1" /> for our customers worldwide
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">4.8/5 from 50,000+ reviews</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-3 rounded-full hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;