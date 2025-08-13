import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const faqItems = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are secured with Norton verification for your safety.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days and delivered within 3-7 business days for domestic orders. International shipping may take 7-14 business days.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all products. Items must be returned in their original condition with all packaging. Please contact our customer service to initiate a return.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide to over 100 countries. Shipping costs and delivery times vary by destination. You can calculate shipping costs during checkout.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has shipped, you will receive a confirmation email with a tracking number and instructions on how to track your package.'
  },
  {
    question: 'What if I receive a damaged or defective product?',
    answer: 'If you receive a damaged or defective product, please contact our customer service within 7 days of delivery. We will arrange for a replacement or refund at no additional cost to you.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support via email, text, or phone. Our support team is always ready to assist you with any questions or concerns.'
  },
  {
    question: 'Are there any discounts for bulk orders?',
    answer: 'Yes, we offer special pricing for bulk orders. Please contact our sales team at sales@umakamezi.com for more information about bulk discounts.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Can't find the answer you're looking for? Reach out to our{' '}
            <a href="/contact" className="text-indigo-600 hover:text-indigo-500">
              customer support
            </a>{' '}
            team.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="px-6 py-5">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly
            team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;