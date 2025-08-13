import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [shipping, setShipping] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(cart)
    
    // Calculate totals
    const newSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(newSubtotal)
    
    // Simple shipping calculation
    const newShipping = newSubtotal > 100 ? 0 : 10
    setShipping(newShipping)
    
    // Simple tax calculation (10%)
    const newTax = newSubtotal * 0.1
    setTax(newTax)
    
    setTotal(newSubtotal + newShipping + newTax)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    
    // Recalculate totals
    const newSubtotal = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(newSubtotal)
    const newShipping = newSubtotal > 100 ? 0 : 10
    setShipping(newShipping)
    const newTax = newSubtotal * 0.1
    setTax(newTax)
    setTotal(newSubtotal + newShipping + newTax)
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    
    // Recalculate totals
    const newSubtotal = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(newSubtotal)
    const newShipping = newSubtotal > 100 ? 0 : 10
    setShipping(newShipping)
    const newTax = newSubtotal * 0.1
    setTax(newTax)
    setTotal(newSubtotal + newShipping + newTax)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold ml-8">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:flex gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b border-gray-200 grid grid-cols-2 md:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded mr-4"
                      />
                      <div>
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-indigo-600">
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center text-red-600 text-sm mt-1"
                        >
                          <TrashIcon className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-medium">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="flex border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 text-center border-t border-b border-gray-300"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300"
                >
                  Proceed to Checkout
                </Link>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  or{' '}
                  <Link to="/" className="text-indigo-600 hover:underline">
                    Continue Shopping
                  </Link>
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-bold mb-4">Promo Code</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;