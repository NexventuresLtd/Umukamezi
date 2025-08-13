import { Link } from 'react-router-dom';
import { Calendar, Clock, User as UserIcon } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Mobile Technology in 2023',
    excerpt: 'Discover the latest trends in mobile technology and what to expect from smartphones this year.',
    image: 'mobile-tech.jpg',
    author: 'Sarah Johnson',
    date: '2023-05-15',
    readTime: '5 min read',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Laptop for Your Needs',
    excerpt: 'A comprehensive guide to selecting the right laptop based on your usage and budget.',
    image: 'laptops.jpg',
    author: 'Michael Chen',
    date: '2023-04-28',
    readTime: '8 min read',
    category: 'Computers'
  },
  {
    id: 3,
    title: 'Top 10 Camera Accessories Every Photographer Needs',
    excerpt: 'Essential accessories that can enhance your photography experience and improve your shots.',
    image: 'camera-accessories.jpg',
    author: 'Emma Wilson',
    date: '2023-04-10',
    readTime: '6 min read',
    category: 'Photography'
  },
  {
    id: 4,
    title: 'The Evolution of Gaming Consoles: What\'s Next?',
    excerpt: 'Looking back at gaming console history and predicting what the future holds for gamers.',
    image: 'gaming-consoles.jpg',
    author: 'David Rodriguez',
    date: '2023-03-22',
    readTime: '7 min read',
    category: 'Gaming'
  },
  {
    id: 5,
    title: 'Smart Home Devices That Will Make Your Life Easier',
    excerpt: 'Explore the best smart home devices that can automate and simplify your daily routines.',
    image: 'smart-home.jpg',
    author: 'Lisa Thompson',
    date: '2023-03-05',
    readTime: '4 min read',
    category: 'Smart Home'
  },
  {
    id: 6,
    title: 'Understanding Audio Equipment: A Beginner\'s Guide',
    excerpt: 'Learn the basics of audio equipment to make informed decisions for your home or studio setup.',
    image: 'audio-equipment.jpg',
    author: 'James Wilson',
    date: '2023-02-18',
    readTime: '9 min read',
    category: 'Audio'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Umakamezi Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest trends, tips, and news in technology and electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-indigo-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Blog;