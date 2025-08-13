import { Link } from 'react-router-dom'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon 
} from '@heroicons/react/24/outline'

function Footer() {
  const categories = [
    'Photography',
    'Videography',
    'Lighting',
    'Pro-Audio',
    'Computer',
    'Accessories'
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' }
  ]

  const customerService = [
    { name: 'FAQs', path: '/faq' },
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Return Policy', path: '/returns' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6">Umukamezi</h3>
            <p className="text-gray-400 mb-6">
              Your trusted source for professional photography and videography equipment since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Shop by Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPinIcon className="h-6 w-6 text-gray-400 mr-4" />
                <span className="text-gray-400">123 Photography Ave, New York, NY 10001</span>
              </li>
              <li className="flex">
                <PhoneIcon className="h-6 w-6 text-gray-400 mr-4" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <EnvelopeIcon className="h-6 w-6 text-gray-400 mr-4" />
                <span className="text-gray-400">info@umukamezi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-r-lg font-bold transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Umukamezi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {customerService.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-400 hover:text-white text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer