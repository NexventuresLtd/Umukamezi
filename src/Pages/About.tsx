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

  Clock,
  Target,
  Zap,

  Camera,

} from 'lucide-react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AboutUsHero from './HeroAboutus';

const About = () => {
  const [countUp, setCountUp] = useState({
    customers: 0,
    countries: 0,
    products: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(currentImageIndex)
  // Camera showcase images
  const cameraImages = [
    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  // Auto-rotate camera images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % cameraImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
        const target = targets[key as keyof typeof targets];
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
      title: "Secure Transactions",
      description: "All purchases protected with industry-leading security"
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable delivery to over 100 countries"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 assistance from our expert team"
    },
    {
      icon: Award,
      title: "Price Guarantee",
      description: "Best prices with competitor matching"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer Focus",
      description: "Your satisfaction drives every decision we make"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously bringing you cutting-edge technology"
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Rigorous standards for every product we offer"
    },
    {
      icon: Globe,
      title: "Global Service",
      description: "Worldwide reach with local expertise"
    }
  ];

  return (
    <div>
      <Header fixedD={true} />
      <AboutUsHero />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-11/12 mx-auto px-4 py-10">
          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-16">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-1/2 relative overflow-hidden max-h-[680px]">
                <img
                  src="kad.jpeg"
                  alt="Our Team"
                  className="w-full object-cover h-full hover:scale-150 cursor-pointer"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-600 mb-6">
                      Our Story
                    </h2>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Founded in 2020, we are passionate about photography and dedicated to providing
                        professionals and enthusiasts with the best equipment. Our carefully curated
                        selection combines quality, performance, and value.
                      </p>

                      <p>
                        Our team of photography experts understands the creative process and technical
                        requirements at every level. We're committed to helping you find exactly what
                        you need to realize your vision.
                      </p>

                      <p>
                        From beginner kits to professional setups, we offer guidance, competitive
                        pricing, and exceptional service to support your photographic journey.
                      </p>
                    </div>
                  </div>

                  {/* Our Promise Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-6 text-yellow-600 flex items-center">
                      <Award className="mr-3 text-gray-700" size={20} />
                      Our Commitment
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={`flex items-start p-3 rounded-lg transition-all duration-300 ${activeFeature === index
                            ? 'bg-white'
                            : 'bg-gray-50 hover:bg-white'
                            }`}
                          onClick={() => setActiveFeature(index)}
                        >
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center mr-3 ${activeFeature === index
                            ? 'bg-yellow-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}>
                            <feature.icon size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-600 mb-1">{feature.title}</h4>
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
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">
                Our Global Reach
              </h2>
              <p className="text-gray-600">
                Trusted by photographers worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Users,
                  value: countUp.customers,
                  suffix: '+',
                  label: 'Customers',
                  color: 'text-yellow-600',
                  bgColor: 'bg-white',
                  description: 'Satisfied clients globally'
                },
                {
                  icon: Globe,
                  value: countUp.countries,
                  suffix: '+',
                  label: 'Countries',
                  color: 'text-yellow-600',
                  bgColor: 'bg-white',
                  description: 'International presence'
                },
                {
                  icon: ShoppingBag,
                  value: countUp.products,
                  suffix: '+',
                  label: 'Products',
                  color: 'text-yellow-600',
                  bgColor: 'bg-white',
                  description: 'Curated selection'
                },
                {
                  icon: Clock,
                  value: countUp.support,
                  suffix: '/7',
                  label: 'Support',
                  color: 'text-yellow-600',
                  bgColor: 'bg-white',
                  description: 'Always available'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="text-yellow-600" size={24} />
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-yellow-500 font-medium mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Values Section */}
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                The foundation of everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <value.icon size={24} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-600">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-yellow-600 text-white p-8 lg:p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Start Your Photography Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of photographers and discover the perfect equipment for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Camera className="mr-2" size={18} />
                Browse Collection
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-yellow-600 transition-all duration-300">
                Contact Our Experts
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