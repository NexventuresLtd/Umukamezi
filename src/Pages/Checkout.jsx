import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function Checkout() {
  const [step, setStep] = useState(1)
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  // Form states
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zip: '',
  })

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zip: '',
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  })

  const handleBillingChange = (e) => {
    const { name, value } = e.target
    setBillingInfo(prev => ({ ...prev, [name]: value }))
    
    if (shippingSameAsBilling && name !== 'email' && name !== 'phone') {
      setShippingInfo(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleShippingChange = (e) => {
    const { name, value } = e.target
    setShippingInfo(prev => ({ ...prev, [name]: value }))
  }

  const handlePaymentChange = (e) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the order here
    nextStep()
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center mb-8">
          <Link to="/cart" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold ml-8">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="mt-2 text-sm">Shipping</span>
            </div>
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="mt-2 text-sm">Payment</span>
            </div>
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="mt-2 text-sm">Review</span>
            </div>
            <div className={`flex flex-col items-center ${step >= 4 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                4
              </div>
              <span className="mt-2 text-sm">Complete</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0"></div>
            <div 
              className="absolute top-5 left-0 h-1 bg-indigo-600 z-10 transition-all duration-300" 
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>

        {/* Checkout Form */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
            <form onSubmit={(e) => { e.preventDefault(); nextStep() }}>
              <div className="mb-6">
                <h3 className="font-medium mb-4">Billing Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={billingInfo.firstName}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={billingInfo.lastName}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={billingInfo.email}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={billingInfo.phone}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={billingInfo.address}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={billingInfo.city}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Country</label>
                    <select
                      name="country"
                      value={billingInfo.country}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700 mb-2">State/Province</label>
                    <input
                      type="text"
                      name="state"
                      value={billingInfo.state}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">ZIP/Postal Code</label>
                    <input
                      type="text"
                      name="zip"
                      value={billingInfo.zip}
                      onChange={handleBillingChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="shippingSameAsBilling"
                    checked={shippingSameAsBilling}
                    onChange={() => setShippingSameAsBilling(!shippingSameAsBilling)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="shippingSameAsBilling" className="ml-2 block text-gray-700">
                    Shipping address is the same as billing address
                  </label>
                </div>

                {!shippingSameAsBilling && (
                  <div>
                    <h3 className="font-medium mb-4">Shipping Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Country</label>
                        <select
                          name="country"
                          value={shippingInfo.country}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-gray-700 mb-2">State/Province</label>
                        <input
                          type="text"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">ZIP/Postal Code</label>
                        <input
                          type="text"
                          name="zip"
                          value={shippingInfo.zip}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            <form onSubmit={(e) => { e.preventDefault(); nextStep() }}>
              <div className="mb-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="credit-card" className="ml-2 block text-gray-700">
                      Credit Card
                    </label>
                  </div>

                  {paymentMethod === 'credit-card' && (
                    <div className="ml-6 mt-4 space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="cardName"
                          value={paymentInfo.cardName}
                          onChange={handlePaymentChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Expiration Date</label>
                          <input
                            type="text"
                            name="expiry"
                            value={paymentInfo.expiry}
                            onChange={handlePaymentChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentChange}
                            placeholder="123"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="paypal" className="ml-2 block text-gray-700">
                      PayPal
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank-transfer"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={() => setPaymentMethod('bank-transfer')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="bank-transfer" className="ml-2 block text-gray-700">
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Review Order
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Review Your Order</h2>
            
            <div className="mb-8">
              <h3 className="font-medium mb-4">Shipping Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                <p>{shippingInfo.address}</p>
                <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}</p>
                <p>{shippingInfo.country}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-4">Payment Method</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {paymentMethod === 'credit-card' && (
                  <>
                    <p className="font-medium">Credit Card</p>
                    <p>Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
                    <p>Expires {paymentInfo.expiry}</p>
                  </>
                )}
                {paymentMethod === 'paypal' && <p className="font-medium">PayPal</p>}
                {paymentMethod === 'bank-transfer' && <p className="font-medium">Bank Transfer</p>}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-4">Order Summary</h3>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 font-medium">
                  <div className="grid grid-cols-12">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <div>
                        <p className="font-medium">Professional DSLR Camera</p>
                        <p className="text-sm text-gray-600">SKU: CAM-001</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">$999.99</div>
                    <div className="col-span-2 text-center">1</div>
                    <div className="col-span-2 text-center">$999.99</div>
                  </div>
                </div>
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$999.99</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Tax</span>
                    <span>$100.00</span>
                  </div>
                  <div className="flex justify-between mt-4 font-bold text-lg">
                    <span>Total</span>
                    <span>$1,109.99</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully. We've sent a confirmation email to{' '}
              <span className="font-medium">{billingInfo.email}</span> with your order details.
            </p>
            <p className="text-gray-600 mb-8">
              Order Number: <span className="font-medium">UMK-{Math.floor(Math.random() * 10000)}</span>
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Continue Shopping
              </Link>
              <Link
                to="/dashboard/orders"
                className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                View Orders
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout;