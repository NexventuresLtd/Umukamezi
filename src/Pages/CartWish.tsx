import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    ShoppingCart,
    X,
    Plus,
    Minus,
    Trash2,
    Star,
    User,
    Home,
    ChevronDown,
    CreditCard,
    Smartphone,
    Check,
    ArrowLeft,
    Loader2,
    Menu
} from 'lucide-react';

// TypeScript types
type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    category: string;
};

type CartItem = Product & {
    quantity: number;
};

type PaymentMethod = 'momo' | 'card' | null;

const UserDashboard = () => {
    // State
    const [activeModal, setActiveModal] = useState<'wishlist' | 'cart' | 'payment' | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
    const [mobileNumber, setMobileNumber] = useState('');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Sample data
    const [wishlist, setWishlist] = useState<Product[]>([
        {
            id: 1,
            name: 'Canon EOS R5',
            price: 3899.99,
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop',
            rating: 4.8,
            category: 'Cameras'
        },
        {
            id: 2,
            name: 'Sony 70-200mm Lens',
            price: 2798.99,
            image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop',
            rating: 4.9,
            category: 'Lenses'
        }
    ]);

    const [cart, setCart] = useState<CartItem[]>([
        {
            id: 3,
            name: 'Nikon D850',
            price: 2996.95,
            image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop',
            rating: 4.7,
            category: 'Cameras',
            quantity: 1
        }
    ]);

    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 1000 ? 0 : 49.99;
    const total = subtotal + tax + shipping;

    // Cart functions
    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) {
            setCart(cart.filter(item => item.id !== id));
            return;
        }
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const removeFromWishlist = (id: number) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    const moveToCart = (product: Product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            updateQuantity(product.id, existingItem.quantity + 1);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        removeFromWishlist(product.id);
    };

    // Payment handlers
    const handlePaymentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setActiveModal(null);
        setIsProcessing(false);
        alert(`Payment of $${total.toFixed(2)} successful!`);
    };

    // Animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1 }
        })
    };

    const sidebarVariants = {
        hidden: { x: -300, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
            {/* Mobile Menu Button */}
            {isMobile && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="fixed top-4 left-4 z-40 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 md:hidden"
                >
                    <Menu className="text-gray-700" size={24} />
                </motion.button>
            )}

            {/* Sidebar */}
            <AnimatePresence>
                {(!isMobile || isMobileSidebarOpen) && (
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sidebarVariants}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={`fixed inset-y-0 left-0 w-64 bg-white/80 backdrop-blur-lg border-r border-gray-200/50 p-4 z-30 ${isMobile ? 'shadow-xl' : ''}`}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-2">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center"
                                >
                                    <User className="text-white" size={20} />
                                </motion.div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                                    My Account
                                </h1>
                            </div>
                            {isMobile && (
                                <motion.button 
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsMobileSidebarOpen(false)} 
                                    className="p-1 hover:bg-gray-100/50 rounded-lg"
                                >
                                    <X size={20} />
                                </motion.button>
                            )}
                        </div>

                        <nav className="space-y-2">
                            <motion.button
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setActiveModal('wishlist');
                                    if (isMobile) setIsMobileSidebarOpen(false);
                                }}
                                className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100/50 transition-all duration-200 group"
                            >
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="mr-3 relative"
                                >
                                    <Heart 
                                        className="text-pink-500 group-hover:text-pink-600 transition-colors" 
                                        size={18} 
                                        fill={wishlist.length > 0 ? 'currentColor' : 'none'}
                                    />
                                    {wishlist.length > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                                        >
                                            {wishlist.length}
                                        </motion.span>
                                    )}
                                </motion.div>
                                <span className="font-medium">Wishlist</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setActiveModal('cart');
                                    if (isMobile) setIsMobileSidebarOpen(false);
                                }}
                                className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100/50 transition-all duration-200 group"
                            >
                                <motion.div 
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="mr-3 relative"
                                >
                                    <ShoppingCart 
                                        className="text-blue-500 group-hover:text-blue-600 transition-colors" 
                                        size={18} 
                                    />
                                    {cart.length > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                                        >
                                            {cart.length}
                                        </motion.span>
                                    )}
                                </motion.div>
                                <span className="font-medium">Cart</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100/50 transition-all duration-200 group"
                            >
                                <Home 
                                    className="text-gray-600 group-hover:text-gray-800 mr-3 transition-colors" 
                                    size={18} 
                                />
                                <span className="font-medium">My Orders</span>
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className={`p-8 transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-64'}`}>
                <div className="flex items-center justify-between mb-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    >
                        Dashboard Overview
                    </motion.h1>
                    
                    {!isMobile && (
                        <motion.a 
                            href="/"
                            whileHover={{ x: -5 }}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="mr-2" size={16} />
                            Back to home
                        </motion.a>
                    )}
                </div>
                
                {isMobile && (
                    <motion.a 
                        href="/"
                        whileHover={{ x: -5 }}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2" size={16} />
                        Back to home
                    </motion.a>
                )}
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
                >
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200/50 transition-all"
                    >
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                            <h3 className="text-base md:text-lg font-semibold text-gray-700">Wishlist Items</h3>
                            <div className="p-2 bg-pink-100/50 rounded-lg">
                                <Heart className="text-pink-500" size={18} />
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-pink-600">{wishlist.length}</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-pink-100 to-pink-300 rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200/50 transition-all"
                    >
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                            <h3 className="text-base md:text-lg font-semibold text-blue-600">Cart Items</h3>
                            <div className="p-2 bg-blue-100/50 rounded-lg">
                                <ShoppingCart className="text-blue-500" size={18} />
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-blue-600">{cart.length}</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-blue-100 to-blue-300 rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200/50 transition-all"
                    >
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                            <h3 className="text-base md:text-lg font-semibold text-orange-600">Total Saved</h3>
                            <div className="p-2 bg-orange-100/50 rounded-lg">
                                <Star className="text-orange-500" size={18} fill="currentColor" />
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-orange-600">${wishlist.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-orange-100 to-orange-300 rounded-full"></div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200/50"
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Recent Activity</h2>
                    <div className="flex flex-col items-center justify-center py-6 md:py-8">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="mb-3 md:mb-4"
                        >
                            <User className="text-gray-300" size={40} />
                        </motion.div>
                        <p className="text-gray-500">No recent activity</p>
                    </div>
                </motion.div>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {/* Wishlist Modal */}
                {activeModal === 'wishlist' && (
                    <motion.div 
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div 
                            variants={modalVariants}
                            className="bg-white/90 backdrop-blur-lg rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-200/50 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-10">
                                <h2 className="text-xl font-bold flex items-center">
                                    <Heart className="mr-2 text-pink-500" size={20} fill="currentColor" />
                                    My Wishlist ({wishlist.length})
                                </h2>
                                <motion.button 
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setActiveModal(null)} 
                                    className="p-2 hover:bg-gray-100/50 rounded-lg"
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>

                            <div className="p-4">
                                {wishlist.length === 0 ? (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-8"
                                    >
                                        <Heart className="mx-auto text-gray-300 mb-4" size={48} />
                                        <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                                        <p className="text-gray-600 mb-4">Start adding items you love</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg"
                                        >
                                            Browse Products
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <div className="space-y-4">
                                        {wishlist.map((item, i) => (
                                            <motion.div 
                                                key={item.id}
                                                custom={i}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover={{ scale: 1.02 }}
                                                className="flex items-center p-4 border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg mr-4"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                    <div className="flex items-center mt-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                            />
                                                        ))}
                                                        <span className="text-xs text-gray-500 ml-1">{item.rating}</span>
                                                    </div>
                                                    <p className="text-lg font-bold mt-2 text-gray-900">${item.price.toFixed(2)}</p>
                                                </div>

                                                <div className="flex space-x-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => moveToCart(item)}
                                                        className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg"
                                                    >
                                                        <ShoppingCart size={18} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => removeFromWishlist(item.id)}
                                                        className="p-2 bg-gradient-to-r from-red-100 to-red-200 text-red-600 rounded-lg"
                                                    >
                                                        <Trash2 size={18} />
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Cart Modal */}
                {activeModal === 'cart' && (
                    <motion.div 
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div 
                            variants={modalVariants}
                            className="bg-white/90 backdrop-blur-lg rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-200/50 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-10">
                                <h2 className="text-xl font-bold flex items-center">
                                    <ShoppingCart className="mr-2 text-blue-500" size={20} />
                                    My Cart ({cart.length})
                                </h2>
                                <motion.button 
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setActiveModal(null)} 
                                    className="p-2 hover:bg-gray-100/50 rounded-lg"
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>

                            <div className="p-4">
                                {cart.length === 0 ? (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-8"
                                    >
                                        <ShoppingCart className="mx-auto text-gray-300 mb-4" size={48} />
                                        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                                        <p className="text-gray-600 mb-4">Add some items to get started</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveModal('wishlist')}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg"
                                        >
                                            View Wishlist
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="space-y-4 mb-6">
                                            {cart.map((item, i) => (
                                                <motion.div 
                                                    key={item.id}
                                                    custom={i}
                                                    variants={itemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover={{ scale: 1.01 }}
                                                    className="flex items-center p-4 border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded-lg mr-4"
                                                    />

                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                        <p className="text-lg font-bold mt-2 text-gray-900">${item.price.toFixed(2)}</p>

                                                        <div className="flex items-center mt-3">
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                                                            >
                                                                <Minus size={14} />
                                                            </motion.button>
                                                            <span className="mx-3 w-8 text-center font-medium">{item.quantity}</span>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                                                            >
                                                                <Plus size={14} />
                                                            </motion.button>
                                                        </div>
                                                    </div>

                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="p-2 bg-gradient-to-r from-red-100 to-red-200 text-red-600 rounded-lg"
                                                    >
                                                        <Trash2 size={18} />
                                                    </motion.button>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="border-t border-gray-200/50 pt-4 mb-6">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">Subtotal</span>
                                                <span className="font-medium">${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">Tax</span>
                                                <span className="font-medium">${tax.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between mb-4">
                                                <span className="text-gray-600">Shipping</span>
                                                <span className="font-medium">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                            </div>
                                            <div className="flex justify-between font-bold text-lg border-t border-gray-200/50 pt-3">
                                                <span className="text-gray-800">Total</span>
                                                <span className="text-blue-600">${total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setActiveModal('payment')}
                                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                                        >
                                            Proceed to Payment
                                            <ChevronDown className="ml-2" size={18} />
                                        </motion.button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Payment Modal */}
                {activeModal === 'payment' && (
                    <motion.div 
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={() => setActiveModal('cart')}
                    >
                        <motion.div 
                            variants={modalVariants}
                            className="bg-white/90 backdrop-blur-lg rounded-xl w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-200/50 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
                                <motion.button 
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setActiveModal('cart')} 
                                    className="p-2 hover:bg-gray-100/50 rounded-lg"
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>

                            <div className="p-4">
                                <div className="space-y-4 mb-6">
                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        onClick={() => setPaymentMethod('momo')}
                                        className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${paymentMethod === 'momo' ? 'border-2 border-yellow-500 bg-yellow-50/50' : 'border border-gray-200/50 bg-white/50 hover:border-yellow-400'}`}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-3">
                                                <Smartphone className="text-purple-600" size={18} />
                                            </div>
                                            <span className="font-medium">Mobile Money (MoMo)</span>
                                        </div>
                                        {paymentMethod === 'momo' && (
                                            <div className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                                                <Check className="text-white" size={12} />
                                            </div>
                                        )}
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        onClick={() => setPaymentMethod('card')}
                                        className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${paymentMethod === 'card' ? 'border-2 border-yellow-500 bg-yellow-50/50' : 'border border-gray-200/50 bg-white/50 hover:border-yellow-400'}`}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3">
                                                <CreditCard className="text-blue-600" size={18} />
                                            </div>
                                            <span className="font-medium">Credit/Debit Card</span>
                                        </div>
                                        {paymentMethod === 'card' && (
                                            <div className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                                                <Check className="text-white" size={12} />
                                            </div>
                                        )}
                                    </motion.button>
                                </div>

                                {paymentMethod === 'momo' && (
                                    <motion.form 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        onSubmit={handlePaymentSubmit}
                                    >
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Mobile Number</label>
                                            <input
                                                type="tel"
                                                placeholder="Enter MoMo number"
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                className="w-full p-3 border border-gray-300/50 rounded-lg bg-white/70 backdrop-blur-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                                required
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            type="submit"
                                            disabled={isProcessing}
                                            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <Loader2 className="animate-spin mr-2" size={18} />
                                                    Processing...
                                                </>
                                            ) : (
                                                `Pay $${total.toFixed(2)} with MoMo`
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}

                                {paymentMethod === 'card' && (
                                    <motion.form 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        onSubmit={handlePaymentSubmit}
                                    >
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Card Number</label>
                                            <input
                                                type="text"
                                                placeholder="1234 5678 9012 3456"
                                                value={cardDetails.number}
                                                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                                                className="w-full p-3 border border-gray-300/50 rounded-lg bg-white/70 backdrop-blur-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Cardholder Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                value={cardDetails.name}
                                                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                                                className="w-full p-3 border border-gray-300/50 rounded-lg bg-white/70 backdrop-blur-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    value={cardDetails.expiry}
                                                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                                    className="w-full p-3 border border-gray-300/50 rounded-lg bg-white/70 backdrop-blur-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700">CVV</label>
                                                <input
                                                    type="text"
                                                    placeholder="123"
                                                    value={cardDetails.cvv}
                                                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                                    className="w-full p-3 border border-gray-300/50 rounded-lg bg-white/70 backdrop-blur-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            type="submit"
                                            disabled={isProcessing}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <Loader2 className="animate-spin mr-2" size={18} />
                                                    Processing...
                                                </>
                                            ) : (
                                                `Pay $${total.toFixed(2)} with Card`
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserDashboard;