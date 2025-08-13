import { useState, useEffect } from 'react';
import { ChevronDown, Search, MessageCircle, Phone, Mail, Shield, Globe, Clock, Package, CreditCard, HeadphonesIcon } from 'lucide-react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const faqItems = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are secured with Norton verification for your safety.',
    category: 'Payment',
    icon: CreditCard
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days and delivered within 3-7 business days for domestic orders. International shipping may take 7-14 business days.',
    category: 'Shipping',
    icon: Package
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a hassle-free 30-day money-back guarantee on all products. Items must be returned in their original condition with all packaging. What you see is exactly what you get - guaranteed!',
    category: 'Returns',
    icon: Shield
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide to over 100 countries as we expand our business internationally. Shipping costs and delivery times vary by destination. You can calculate shipping costs during checkout.',
    category: 'Shipping',
    icon: Globe
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has shipped, you will receive a confirmation email with a tracking number and instructions on how to track your package. You can also log into your account to view order status.',
    category: 'Orders',
    icon: Package
  },
  {
    question: 'What if I receive a damaged or defective product?',
    answer: 'If you receive a damaged or defective product, please contact our customer service within 7 days of delivery. We ensure the highest quality standards and will arrange for a replacement or refund at no additional cost to you.',
    category: 'Quality',
    icon: Shield
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support via email, text, or phone. Our friendly support team is always ready to assist you with any questions or concerns because your satisfaction is our top priority.',
    category: 'Support',
    icon: HeadphonesIcon
  },
  {
    question: 'Are there any discounts for bulk orders?',
    answer: 'Yes, we offer special pricing for bulk orders and regular exciting offers and gifts. Please contact our sales team at sales@umakamezi.com for more information about bulk discounts and referral rewards.',
    category: 'Pricing',
    icon: CreditCard
  },
  {
    question: 'What makes Umakamezi different from other e-commerce sites?',
    answer: 'We offer high-quality yet budget-friendly products with excellent customer service. We keep up with the latest trends, offer hassle-free returns, low price guarantee, Norton-verified security, and put our customers\' wishes first.',
    category: 'About',
    icon: Shield
  },
  {
    question: 'How do I create an account and start shopping?',
    answer: 'Simply sign up with us now! Creating an account is quick and easy. Once registered, you can start browsing our variety of latest products, track orders, and enjoy exclusive member benefits.',
    category: 'Account',
    icon: MessageCircle
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(faqItems);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqItems.map(item => item.category)))];

  useEffect(() => {
    let filtered = faqItems;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredItems(filtered);
    setActiveIndex(null);
  }, [searchTerm, selectedCategory]);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const quickActions = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Call us anytime',
      action: '+1 (555) 123-4567',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      action: 'support@umakamezi.com',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Frequently Asked <span className="text-amber-200">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Find quick answers to common questions about our quality products and excellent service
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Search and Filter Section */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search FAQs
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Immediate Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2 cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 mb-3">{action.description}</p>
                  <p className="text-yellow-600 font-semibold">{action.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageCircle className="w-6 h-6 text-yellow-600 mr-3" />
                Common Questions ({filteredItems.length})
              </h2>
            </div>
            
            {filteredItems.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredItems.map((item, index) => {
                  const isActive = activeIndex === index;
                  const Icon = item.icon;
                  
                  return (
                    <div 
                      key={index} 
                      className="group hover:bg-gray-50 transition-all duration-200"
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <button
                        className="w-full px-8 py-6 text-left focus:outline-none focus:bg-yellow-50"
                        onClick={() => toggleItem(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-1">
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors duration-200">
                              <Icon className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
                                {item.question}
                              </h3>
                              <span className="inline-block mt-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {item.category}
                              </span>
                            </div>
                          </div>
                          <div className={`ml-4 transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                            <ChevronDown className="h-6 w-6 text-gray-400" />
                          </div>
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-8 pb-6">
                          <div className="ml-14 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-l-4 border-yellow-400">
                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeadphonesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                  Can't find what you're looking for? Our friendly customer service team is here to help you 24/7.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center space-x-2 text-yellow-200">
                    <Clock className="w-5 h-5" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-200">
                    <Shield className="w-5 h-5" />
                    <span>Norton Verified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-200">
                    <Globe className="w-5 h-5" />
                    <span>Worldwide Service</span>
                  </div>
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Our Support Team
                </a>
              </div>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Shipping', 'Returns', 'Payment', 'Quality Guarantee', 'International Orders', '24/7 Support'].map((topic, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSearchTerm(topic.toLowerCase())}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    
    </div>
  );
};

export default FAQ;