import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Blog() {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Photography Equipment',
      excerpt: 'Learn about the essential gear every photographer needs in their kit.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'June 15, 2023',
      category: 'Photography',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Lighting Techniques for Stunning Video',
      excerpt: 'Discover professional lighting setups that will elevate your video production.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'June 2, 2023',
      category: 'Videography',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Audio Equipment for Crystal Clear Sound',
      excerpt: 'Get the best audio quality with our recommended equipment list.',
      image: 'https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'May 28, 2023',
      category: 'Pro Audio',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Choosing the Right Computer for Video Editing',
      excerpt: 'What specs matter most when building or buying a video editing workstation.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'May 15, 2023',
      category: 'Computers',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Must-Have Accessories for Photographers',
      excerpt: 'These accessories will make your photography workflow smoother and more efficient.',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'April 30, 2023',
      category: 'Accessories',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Studio Lighting Setup for Beginners',
      excerpt: 'A step-by-step guide to setting up your first professional lighting setup.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'April 18, 2023',
      category: 'Lighting',
      readTime: '9 min read'
    }
  ]

  const categories = [
    'All',
    'Photography',
    'Videography',
    'Lighting',
    'Pro Audio',
    'Computers',
    'Accessories'
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Umukamezi Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, tutorials, and industry insights for professional photographers and videographers
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-bold mb-4">No posts found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative pb-2/3 h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-indigo-600 font-medium hover:underline">Read More</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog;