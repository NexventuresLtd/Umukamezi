import { useState, useEffect } from 'react';
import { 
  Users, 
  Globe, 
  ShoppingBag, 
  Headphones,
  Award,
  Shield,
  Truck,
  Heart,
  Star,
  TrendingUp,
  Clock,
  Target,
  Zap,
  ChevronRight,
  Home,
  Quote,
  ArrowRight
} from 'lucide-react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

// Enhanced Breadcrumb Component
const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-sm mb-8 bg-gradient-to-r from-gray-50 to-yellow-50 px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center space-x-2">
        <a 
          href="/" 
          className="flex items-center text-gray-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
        >
          <Home size={16} className="hover:text-yellow-600" />
        </a>
        <ChevronRight size={14} className="text-gray-400 mx-2" />
        <span className="text-gray-900 font-semibold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text px-3 py-1 rounded-md bg-white shadow-sm border border-yellow-200">
          About Us
        </span>
      </div>
    </nav>
  );
};

const About = () => {
  const [countUp, setCountUp] = useState({
    customers: 0,
    countries: 0,
    products: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const targets = {
        customers: 50000,
        countries: 100,
        products: 1000,
        support: 24
      };

      Object.keys(targets).forEach(key => {
        const target = targets[key];
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCountUp(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 20);
      });
    }
  }, [isVisible]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('stats-section');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Norton Verified Security",
      description: "All transactions protected with highest security standards"
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Free shipping to 100+ countries with tracking"
    },
    {
      icon: Headphones,
      title: "24/7 Premium Support",
      description: "Round-the-clock assistance via email, chat, or phone"
    },
    {
      icon: Award,
      title: "Low Price Guarantee",
      description: "Best prices guaranteed or we'll match any competitor"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Your satisfaction is our top priority in everything we do"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends to bring you the latest products"
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every product is carefully selected for quality and value"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with local care"
    }
  ];

  return (
   <div>
    <Header />
   <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb />

        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                About Umakamezi
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your premier destination for high-quality, budget-friendly products with exceptional customer service
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 transform hover:shadow-3xl transition-all duration-500">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Umakamezi Team"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px] transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">4.9★</div>
                    <div className="text-xs text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Growing</div>
                    <div className="text-xs text-gray-600">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
                    Our Story
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"></span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="relative pl-6">
                      <Quote className="absolute left-0 top-0 text-yellow-300" size={20} />
                      Welcome to Umakamezi, your premier destination for the latest and greatest products. 
                      We've come a long way since our inception, and now we know exactly which direction 
                      to take when supplying you with high-quality yet budget-friendly products.
                    </p>
                    
                    <p>
                      We offer all of this while providing excellent customer service and friendly support. 
                      We always keep an eye on the latest trends and put our customers' wishes first. 
                      That is why we have satisfied customers all over the world.
                    </p>
                    
                    <p>
                      The interests of our customers are always top priority for us, so we hope you will 
                      enjoy our products as much as we enjoy making them available to you.
                    </p>
                  </div>
                </div>

                {/* Our Promise Section */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-800 flex items-center">
                    <Award className="mr-3 text-yellow-600" size={28} />
                    Our Promise to You
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                          activeFeature === index 
                            ? 'bg-white shadow-lg transform scale-105' 
                            : 'bg-white/50 hover:bg-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${
                          activeFeature === index 
                            ? 'bg-yellow-500 text-white' 
                            : 'bg-yellow-200 text-yellow-600'
                        }`}>
                          <feature.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div id="stats-section" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 text-lg">
              Growing stronger every day with our amazing community
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Users, 
                value: countUp.customers, 
                suffix: '+', 
                label: 'Happy Customers',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
                description: 'Worldwide satisfaction'
              },
              { 
                icon: Globe, 
                value: countUp.countries, 
                suffix: '+', 
                label: 'Countries Served',
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
                description: 'Global presence'
              },
              { 
                icon: ShoppingBag, 
                value: countUp.products, 
                suffix: '+', 
                label: 'Quality Products',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
                description: 'Curated selection'
              },
              { 
                icon: Clock, 
                value: countUp.support, 
                suffix: '/7', 
                label: 'Customer Support',
                color: 'from-yellow-500 to-yellow-600',
                bgColor: 'bg-yellow-50',
                description: 'Always available'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-300 text-lg">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Umakamezi for their shopping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <ShoppingBag className="mr-2" size={20} />
              Start Shopping
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default About;