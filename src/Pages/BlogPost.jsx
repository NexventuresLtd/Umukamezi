import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline'

function BlogPost() {
  const { id } = useParams()
  
  // Mock blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Photography Equipment',
      content: `
        <p>Photography is an art that requires not just skill but also the right equipment. Whether you're a beginner or a professional, having the right gear can make a significant difference in your work. In this guide, we'll walk you through the essential equipment every photographer should consider.</p>
        
        <h2>1. Camera Body</h2>
        <p>The camera is the most crucial piece of equipment. For beginners, a DSLR or mirrorless camera with interchangeable lenses is ideal. Professionals might prefer full-frame cameras for better image quality and low-light performance.</p>
        
        <h2>2. Lenses</h2>
        <p>Invest in good-quality lenses. A standard zoom lens (24-70mm) is versatile for most situations, while a prime lens (50mm f/1.8) is excellent for portraits and low-light conditions.</p>
        
        <h2>3. Tripod</h2>
        <p>A sturdy tripod is essential for long exposures, landscape photography, and studio work. Look for one that's durable yet lightweight if you travel often.</p>
        
        <h2>4. Lighting Equipment</h2>
        <p>Natural light is great, but having control over your lighting is crucial. Consider speedlights for on-camera flash or studio strobes for more controlled environments.</p>
        
        <h2>5. Memory Cards and Backup</h2>
        <p>Always have multiple high-capacity, fast memory cards. Additionally, invest in an external hard drive or cloud storage for backing up your work.</p>
        
        <h2>6. Camera Bag</h2>
        <p>Protect your gear with a quality camera bag that's comfortable to carry and has enough space for all your equipment.</p>
        
        <p>Remember, while equipment is important, it's your creativity and vision that truly make a photograph stand out. Start with the basics and gradually build your kit as you grow as a photographer.</p>
      `,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      date: 'June 15, 2023',
      category: 'Photography',
      readTime: '8 min read',
      author: {
        name: 'Sarah Johnson',
        role: 'Professional Photographer',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      relatedPosts: [2, 4, 6]
    },
    // ... other posts would be here
  ]

  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-indigo-600 hover:underline">
          Back to blog
        </Link>
      </div>
    )
  }

  // Find related posts
  const relatedPosts = blogPosts.filter(p => post.relatedPosts.includes(p.id))

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-indigo-600">{post.category}</span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
              <div className="ml-auto flex space-x-4">
                <button className="text-gray-500 hover:text-indigo-600">
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-indigo-600">
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Published on {post.date}</p>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative pb-2/3 h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-indigo-600">{post.category}</span>
                      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        <span className="text-xs text-indigo-600 hover:underline">Read More</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;