import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowRightIcon, ArrowLeftIcon, StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import products from '../data/products.json'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [recentlyViewed, setRecentlyViewed] = useState([])
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    // Load featured products
    setFeaturedProducts(products.filter(product => product.featured).slice(0, 8))
    
    // Load recently viewed from localStorage
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || []
    setRecentlyViewed(viewed)
    
    // Load blog posts (mock data)
    const mockBlogPosts = [
      {
        id: 1,
        title: 'The Ultimate Guide to Photography Equipment',
        excerpt: 'Learn about the essential gear every photographer needs in their kit.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'May 15, 2023'
      },
      {
        id: 2,
        title: 'Lighting Techniques for Stunning Video',
        excerpt: 'Discover professional lighting setups that will elevate your video production.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'June 2, 2023'
      },
      {
        id: 3,
        title: 'Audio Equipment for Crystal Clear Sound',
        excerpt: 'Get the best audio quality with our recommended equipment list.',
        image: 'https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        date: 'June 18, 2023'
      }
    ]
    setBlogPosts(mockBlogPosts)
  }, [])

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>
    )
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const categories = [
    {
      name: 'Photography',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Photography').length
    },
    {
      name: 'Videography',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Videography').length
    },
    {
      name: 'Lighting',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Lighting').length
    },
    {
      name: 'Pro-Audio',
      image: 'https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Pro-Audio').length
    },
    {
      name: 'Computer',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Computer').length
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      count: products.filter(p => p.category === 'Accessories').length
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Professional Photographer',
      content: 'The equipment I purchased from Umukamezi has transformed my work. The quality is exceptional and the customer service is outstanding.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Video Producer',
      content: 'I rely on Umukamezi for all my production gear. Their selection is comprehensive and their prices are competitive.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'Audio Engineer',
      content: 'As a professional in the industry, I appreciate the high-quality audio equipment Umukamezi offers. Fast shipping too!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
      <div className="relative">
        <Slider {...sliderSettings}>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Photography Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Professional Photography Gear</h1>
                <p className="text-xl text-white mb-8">Upgrade your kit with our premium selection of cameras and lenses</p>
                <Link
                  to="/category/photography"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Videography Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Cinematic Video Production</h1>
                <p className="text-xl text-white mb-8">Everything you need to create professional-quality videos</p>
                <Link
                  to="/category/videography"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Lighting Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Professional Lighting Solutions</h1>
                <p className="text-xl text-white mb-8">Illuminate your creativity with our premium lighting gear</p>
                <Link
                  to="/category/lighting"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Discover
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-white">{category.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative pb-3/4 h-48">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="absolute h-full w-full object-cover"
                    />
                    {product.featured && (
                      <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                      {product.stock > 0 ? (
                        <span className="text-green-600 text-sm">In Stock</span>
                      ) : (
                        <span className="text-red-600 text-sm">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Recently Viewed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {recentlyViewed.map((productId) => {
                const product = products.find(p => p.id === productId)
                if (!product) return null
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative pb-3/4 h-48">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="absolute h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                          {product.stock > 0 ? (
                            <span className="text-green-600 text-sm">In Stock</span>
                          ) : (
                            <span className="text-red-600 text-sm">Out of Stock</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-indigo-600 font-medium">Read More</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, offers, and photography tips.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-indigo-800 hover:bg-indigo-900 px-6 py-3 rounded-r-lg font-bold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home;