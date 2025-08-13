import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { StarIcon, HeartIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import products from '../data/products.json'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    // Find the product
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)

    // Load related products
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    }

    // Add to recently viewed
    if (foundProduct) {
      const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || []
      if (!viewed.includes(foundProduct.id)) {
        const updatedViewed = [foundProduct.id, ...viewed].slice(0, 10)
        localStorage.setItem('recentlyViewed', JSON.stringify(updatedViewed))
      }
    }

    // Check if product is in wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    setIsWishlisted(wishlist.includes(parseInt(id)))
  }, [id])

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    // Here you would typically update the cart context or show a notification
  }

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    if (isWishlisted) {
      const updatedWishlist = wishlist.filter(item => item !== product.id)
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    } else {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, product.id]))
    }
    setIsWishlisted(!isWishlisted)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <ChevronRightIcon className="h-4 w-4 mx-2" />
          <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-indigo-600">
            {product.category}
          </Link>
          <ChevronRightIcon className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Product Main */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 relative">
              <div className="relative h-96">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex p-4 space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 border-2 ${currentImageIndex === index ? 'border-indigo-600' : 'border-transparent'}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
                {product.stock > 0 ? (
                  <span className="ml-4 text-green-600">In Stock</span>
                ) : (
                  <span className="ml-4 text-red-600">Out of Stock</span>
                )}
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                <div className="flex">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 px-4 py-2 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-t border-b border-gray-300 py-2"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 px-4 py-2 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className={`flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${product.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`p-3 rounded-lg border ${isWishlisted ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-50 border-gray-200 text-gray-600'} hover:bg-gray-100 transition duration-300`}
                >
                  <HeartIcon className={`h-6 w-6 ${isWishlisted ? 'fill-red-600' : ''}`} />
                </button>
              </div>

              {/* Details */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium mb-2">Details</h3>
                <ul className="text-gray-600 space-y-1">
                  <li><span className="font-medium">Category:</span> {product.category}</li>
                  <li><span className="font-medium">Brand:</span> {product.brand}</li>
                  <li><span className="font-medium">SKU:</span> {product.sku}</li>
                  <li><span className="font-medium">Availability:</span> {product.stock} units</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex">
              <button className="px-6 py-4 font-medium border-b-2 border-indigo-600 text-indigo-600">
                Description
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-indigo-600">
                Specifications
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-indigo-600">
                Reviews ({product.reviews})
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Product Description</h3>
              <p className="text-gray-700 mb-4">{product.fullDescription}</p>
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
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
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail;