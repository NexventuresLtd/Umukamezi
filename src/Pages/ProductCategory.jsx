import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { StarIcon, FunnelIcon, Squares2X2Icon, ListBulletIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import products from '@/data/products.json';

function ProductCategory() {
  const { category } = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [sortOption, setSortOption] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [ratingFilter, setRatingFilter] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Filter products by category
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    )
    setCategoryProducts(filtered)
  }, [category])

  // Apply sorting
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return new Date(b.dateAdded) - new Date(a.dateAdded)
      default:
        return a.featured ? -1 : b.featured ? 1 : 0
    }
  })

  // Apply filters
  const filteredProducts = sortedProducts.filter((product) => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.rating >= ratingFilter
    )
  })

  const categoryData = {
    photography: {
      title: 'Photography Equipment',
      description: 'Explore our wide range of professional photography gear including cameras, lenses, tripods, and accessories to capture stunning images.',
      banner: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    videography: {
      title: 'Videography Equipment',
      description: 'Find everything you need for professional video production - cameras, stabilizers, microphones, and editing tools.',
      banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    lighting: {
      title: 'Lighting Equipment',
      description: 'Illuminate your shoots with our premium lighting solutions including LED panels, softboxes, and studio lighting kits.',
      banner: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    'pro-audio': {
      title: 'Pro Audio Equipment',
      description: 'High-quality audio gear for recording studios, live performances, and podcasting setups.',
      banner: 'https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    computer: {
      title: 'Computer Equipment',
      description: 'Powerful computers and accessories for photo and video editing, music production, and creative work.',
      banner: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    accessories: {
      title: 'Accessories',
      description: 'Essential accessories to complement your professional gear including bags, memory cards, batteries, and more.',
      banner: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    }
  }

  const currentCategory = categoryData[category.toLowerCase()] || {
    title: 'Category',
    description: 'Browse our products in this category',
    banner: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
  }

  return (
    <div className="bg-gray-50">
      {/* Category Banner */}
      <div className="relative h-64">
        <img
          src={currentCategory.banner}
          alt={currentCategory.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="max-w-11/12  mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{currentCategory.title}</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-11/12  mx-auto px-6 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-white px-4 py-2 rounded-lg -sm mr-4"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              <span>Filters</span>
            </button>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white px-4 py-2 pr-8 rounded-lg -sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDownIcon className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-lg -sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'text-yellow-600' : 'text-gray-500'}`}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'text-yellow-600' : 'text-gray-500'}`}
            >
              <ListBulletIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg -md mb-8">
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full mb-2"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Minimum Rating</h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRatingFilter(ratingFilter === star ? 0 : star)}
                      className="p-1"
                    >
                      <StarIcon
                        className={`h-6 w-6 ${star <= ratingFilter ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {ratingFilter > 0 ? `${ratingFilter}+ stars` : 'Any rating'}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability</h4>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="rounded text-yellow-600 focus:ring-yellow-500"
                  />
                  <span className="ml-2">In Stock Only</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-yellow-600 focus:ring-yellow-500"
                  />
                  <span className="ml-2">Featured Items</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg -md overflow-hidden hover:-lg transition duration-300">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative pb-3/4 h-48">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="absolute h-full w-full object-cover"
                      />
                      {product.featured && (
                        <span className="absolute top-2 right-2 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
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
                        <span className="text-lg font-bold text-yellow-600">${product.price.toFixed(2)}</span>
                        {product.stock > 0 ? (
                          <span className="text-green-600 text-sm">In Stock</span>
                        ) : (
                          <span className="text-red-600 text-sm">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </Link>
                  <div className="px-4 pb-4">
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg -md overflow-hidden hover:-lg transition duration-300 flex">
                  <Link to={`/product/${product.id}`} className="block w-1/3">
                    <div className="relative h-full">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="absolute h-full w-full object-cover"
                      />
                      {product.featured && (
                        <span className="absolute top-2 right-2 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description.substring(0, 150)}...</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-yellow-600">${product.price.toFixed(2)}</span>
                      {product.stock > 0 ? (
                        <span className="text-green-600">In Stock ({product.stock} available)</span>
                      ) : (
                        <span className="text-red-600">Out of Stock</span>
                      )}
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Add to Cart
                      </button>
                      <button className="flex-1 border border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-bold py-2 px-4 rounded transition duration-300">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="bg-white p-8 rounded-lg -md text-center">
            <h3 className="text-xl font-bold mb-4">No products match your filters</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setPriceRange([0, 5000])
                setRatingFilter(0)
                setSortOption('featured')
              }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCategory;