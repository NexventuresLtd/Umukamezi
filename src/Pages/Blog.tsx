import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Filter, 
  TrendingUp, 
  Eye, 
  Heart,
  Share2,
  ArrowRight,
  Tag,
  BookOpen,
  ChevronRight,
  Home
} from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Enhanced Breadcrumb
const Breadcrumb = () => (
  <nav className="flex items-center text-sm mb-8 bg-gradient-to-r from-gray-50 to-yellow-50 px-6 py-4 rounded-2xl border border-gray-200 -sm">
    <a href="/" className="flex items-center text-gray-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110">
      <Home size={16} />
    </a>
    <ChevronRight size={14} className="text-gray-400 mx-2" />
    <span className="text-gray-900 font-semibold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text ">
      Blog
    </span>
  </nav>
);

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Mobile Technology in 2025',
    excerpt: 'Discover the latest trends in mobile technology and what to expect from smartphones this year with AI integration and revolutionary features.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Technology',
    views: 2400,
    trending: true,
    featured: true
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Laptop for Your Needs',
    excerpt: 'A comprehensive guide to selecting the right laptop based on your usage, budget, and performance requirements in 2025.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Michael Chen',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Computers',
    views: 1800,
    trending: false
  },
  {
    id: 3,
    title: 'Top 10 Camera Accessories Every Photographer Needs',
    excerpt: 'Essential accessories that can enhance your photography experience and improve your shots, from beginner to professional level.',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Emma Wilson',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Photography',
    views: 1500
  },
  {
    id: 4,
    title: 'The Evolution of Gaming Consoles: What\'s Next?',
    excerpt: 'Looking back at gaming console history and predicting what the future holds for gamers with next-gen technologies.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'David Rodriguez',
    date: '2024-12-22',
    readTime: '7 min read',
    category: 'Gaming',
    views: 3200,
    trending: true
  },
  {
    id: 5,
    title: 'Smart Home Devices That Will Make Your Life Easier',
    excerpt: 'Explore the best smart home devices that can automate and simplify your daily routines with cutting-edge AI technology.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Lisa Thompson',
    date: '2024-12-15',
    readTime: '4 min read',
    category: 'Smart Home',
    views: 2100
  },
  {
    id: 6,
    title: 'Understanding Audio Equipment: A Beginner\'s Guide',
    excerpt: 'Learn the basics of audio equipment to make informed decisions for your home or studio setup with professional quality.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'James Wilson',
    date: '2024-12-08',
    readTime: '9 min read',
    category: 'Audio',
    views: 1200
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [likedPosts, setLikedPosts] = useState(new Set());

  const categories = ['All', 'Technology', 'Computers', 'Photography', 'Gaming', 'Smart Home', 'Audio'];

  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Umukamezi Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, expert tips, and industry insights in technology and innovation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl -lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="bg-white rounded-3xl -2xl overflow-hidden mb-16 group cursor-pointer">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  ✨ Featured Article
                </div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  {featuredPost.trending && (
                    <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp size={14} className="mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-gray-500">
                      <Eye size={16} className="mr-1" />
                      <span className="text-sm">{featuredPost.views}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => window.location.href = `/blog/${featuredPost.id}`}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-3 rounded-xl font-medium hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl -lg overflow-hidden hover:-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                {post.trending && (
                  <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    Trending
                  </div>
                )}
                
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(post.id);
                    }}
                    className={`p-2 rounded-full -lg transition-all duration-300 ${
                      likedPosts.has(post.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart size={16} className={likedPosts.has(post.id) ? 'fill-current' : ''} />
                  </button>
                  
                  <button className="p-2 bg-white text-gray-600 rounded-full -lg hover:bg-blue-50 hover:text-blue-500 transition-all duration-300">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Tag size={12} className="mr-1" />
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye size={14} className="mr-1" />
                    {post.views}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <button
                  onClick={() => window.location.href = `/blog/${post.id}`}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-3 rounded-xl font-medium hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <BookOpen className="mr-2" size={18} />
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 -lg">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-12 rounded-3xl text-center -2xl">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop!</h3>
          <p className="text-yellow-100 mb-8 text-lg">
            Get the latest articles and tech insights delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-yellow-600 px-6 py-3 rounded-r-xl font-bold hover:bg-gray-100 transition-all duration-300">
              Subscribe
            </button>
          </div>
      </div>
        </div>
       <Footer />
    </div>
  );
};

export default Blog;