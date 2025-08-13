import { useState} from 'react';
import { Mail, Phone, MapPin, Send, Clock, Shield, Globe, CheckCircle, Star, MessageCircle } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const features = [
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "We're here for you around the clock via email, text, or call",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Verified Security",
      description: "All transactions verified by Norton with highest security standards",
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      description: "Expanding internationally with reliable global delivery",
      color: "text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional quality products and outstanding customer service!"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Fast shipping and exactly what I ordered. Highly recommended!"
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "Love the hassle-free returns policy. Great shopping experience!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Get In <span className="text-amber-200">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help with high-quality, budget-friendly products and excellent customer service
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Features Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl -lg hover:-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form & Info Section */}
          <div className="bg-white rounded-3xl -2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Let's Connect
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg">
                      Experience our commitment to quality and customer satisfaction
                    </p>

                    <div className="space-y-8">
                      <div className="group flex items-start hover:bg-gray-800 p-4 rounded-xl transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                          <p className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors">support@Umukamezi.com</p>
                          <p className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors">sales@Umukamezi.com</p>
                        </div>
                      </div>

                      <div className="group flex items-start hover:bg-gray-800 p-4 rounded-xl transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                          <p className="text-yellow-400">+1 (555) 123-4567</p>
                          <p className="text-gray-300 text-sm">Available 24/7</p>
                        </div>
                      </div>

                      <div className="group flex items-start hover:bg-gray-800 p-4 rounded-xl transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                          <p className="text-gray-300">123 Tech Street</p>
                          <p className="text-gray-300">Digital City, 10001</p>
                          <p className="text-gray-300">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quality Badges */}
                  <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-gray-300">Norton Verified</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-300">Secure Checkout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 lg:p-12">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send us a message</h3>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                      </div>
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                            focusedField === 'name' 
                              ? 'border-yellow-500 bg-yellow-50 -lg transform scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                            focusedField === 'email' 
                              ? 'border-yellow-500 bg-yellow-50 -lg transform scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus('subject')}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                            focusedField === 'subject' 
                              ? 'border-yellow-500 bg-yellow-50 -lg transform scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => handleFocus('message')}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                            focusedField === 'message' 
                              ? 'border-yellow-500 bg-yellow-50 -lg transform scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-700 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none -lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied customers worldwide who trust Umukamezi for quality products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl -lg p-6 border border-gray-100 hover:-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2 + 0.5}s both`
                  }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-amber-500 rounded-3xl p-12 text-white">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality?</h2>
              <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
                Join our community of satisfied customers and discover why we're trusted worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-yellow-200">✓ Low Price Guarantee</span>
                <span className="text-yellow-200">✓ Easy Returns</span>
                <span className="text-yellow-200">✓ Secure Transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

    </div>
  );
};

export default Contact;