import { Link } from 'react-router-dom';
import TeamImage from '../assets/team.jpg';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
    <div className="min-h-screen bg-gray-50">
     
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">About Us</span>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={TeamImage}
                alt="Umakamezi Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">About Umakamezi</h1>
              <p className="text-gray-600 mb-4">
                Welcome to Umakamezi, your premier destination for the latest and greatest in
                electronics and technology products. We've come a long way since our inception,
                and now we know exactly which direction to take when supplying you with
                high-quality yet budget-friendly products.
              </p>
              <p className="text-gray-600 mb-4">
                We offer all of this while providing excellent customer service and friendly
                support. We always keep an eye on the latest trends in electronics and put our
                customers' wishes first. That is why we have satisfied customers all over the
                world, and are thrilled to be a part of the electronics industry.
              </p>
              <p className="text-gray-600 mb-6">
                The interests of our customers are always top priority for us, so we hope you
                will enjoy our products as much as we enjoy making them available to you.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-indigo-700">Our Promise</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2" />
                    <span>Low Price Guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2" />
                    <span>24/7 Customer Support via E-Mail, Text, or Call</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2" />
                    <span>Worldwide Shipping with easy returns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2" />
                    <span>Verified Security for all transactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-gray-600">Quality Products</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;