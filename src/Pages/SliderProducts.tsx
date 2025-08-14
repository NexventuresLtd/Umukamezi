import React, { useState, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Heart,
    ShoppingCart,
    Eye,
    Camera,
    Zap,
    X,
    Play,
    Pause
} from 'lucide-react';

// Type Definitions
type ProductSpecs = {
    resolution?: string;
    videoQuality?: string;
    isoRange?: string;
    batteryLife?: string;
    weight?: string;
    connectivity?: string[];
    focalLength?: string;
    aperture?: string;
    filterSize?: string;
    minFocusDistance?: string;
    elements?: string;
    sensor?: string;
    storage?: string;
    lens?: string;
    viewfinder?: string;
    material?: string;
    maxHeight?: string;
    minHeight?: string;
    maxLoad?: string;
    sections?: string;
    [key: string]: string | string[] | undefined;
};

type Product = {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge: string;
    specs: ProductSpecs;
    features: string[];
    description: string;
};

type ProductCategory = {
    id: number;
    category: string;
    icon: React.ComponentType<{ size: number }>;
    color: string;
    bgColor: string;
    products: Product[];
};

const OtherProducts: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const productCategories: ProductCategory[] = [
        {
            id: 1,
            category: "Mirrorless Cameras",
            icon: Camera,
            color: "from-yellow-600 to-yellow-700",
            bgColor: "bg-white",
            products: [
                {
                    id: 201,
                    name: "Fujifilm X-T5",
                    price: 1699.99,
                    originalPrice: 1799.99,
                    rating: 4.7,
                    reviews: 148,
                    image: "https://www.dpreview.com/files/p/articles/0162052316/Fujifilm_X-T5_X-T4_X-T3_hand_grips.jpeg",
                    badge: "Compact Power",
                    specs: {
                        resolution: "40 MP",
                        videoQuality: "6.2K/30fps",
                        isoRange: "125–12800",
                        batteryLife: "580 shots",
                        weight: "557g",
                        connectivity: ["Wi-Fi", "Bluetooth", "USB-C"]
                    },
                    features: ["Film Simulation Modes", "5-axis IBIS", "Tilting Touchscreen"],
                    description: "APS-C mirrorless with retro design, advanced AF, and superior image quality."
                },
                {
                    id: 202,
                    name: "Nikon Z5 II",
                    price: 1696.95,
                    originalPrice: 1899.99,
                    rating: 4.6,
                    reviews: 95,
                    image: "https://m.media-amazon.com/images/I/71sxCCcVxWL._UF894,1000_QL80_.jpg",
                    badge: "Best Value FF",
                    specs: {
                        resolution: "24.5 MP",
                        videoQuality: "4K/30fps",
                        isoRange: "100–64000",
                        batteryLife: "700 shots",
                        weight: "620g",
                        connectivity: ["Wi-Fi", "Bluetooth 5.0", "USB-C", "HDMI"]
                    },
                    features: ["In-Body Stabilization", "Dual Card Slots", "Uncropped 4K"],
                    description: "Affordable full-frame hybrid—versatile for both photo and video."
                },
                {
                    id: 203,
                    name: "Sony A6700",
                    price: 1398.00,
                    originalPrice: 1598.00,
                    rating: 4.8,
                    reviews: 210,
                    image: "https://cdn11.bigcommerce.com/s-6eafq5t88w/images/stencil/original/products/49758/124844/ILCE-6700_SELP1650_right-3000px__99321.1689172352.jpg?c=1",
                    badge: "APS-C Pro",
                    specs: {
                        resolution: "26 MP",
                        videoQuality: "4K/60fps",
                        isoRange: "100–32000",
                        batteryLife: "600 shots",
                        weight: "619g",
                        connectivity: ["Wi-Fi", "Bluetooth", "USB-C"]
                    },
                    features: ["4K/120fps", "Real-time AF Tracking", "4-axis Tilting Screen"],
                    description: "High-performance crop-sensor camera ideal for vlogging and action."
                }
            ]
        },
        {
            id: 2,
            category: "DSLR Cameras",
            icon: Camera,
            color: "from-yellow-500 to-yellow-600",
            bgColor: "bg-white",
            products: [
                {
                    id: 301,
                    name: "Nikon D850",
                    price: 2996.95,
                    originalPrice: 3296.95,
                    rating: 4.9,
                    reviews: 320,
                    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
                    badge: "Pro Body",
                    specs: {
                        resolution: "45.7 MP",
                        videoQuality: "4K/30fps",
                        isoRange: "64–25600",
                        batteryLife: "1840 shots",
                        weight: "1005g",
                        connectivity: ["Wi-Fi", "USB-C", "HDMI"]
                    },
                    features: ["Weather-sealed", "51-point AF", "High-res Back-lit LCD"],
                    description: "High-resolution full-frame DSLR—still a top choice in 2025."
                },
                {
                    id: 302,
                    name: "Canon EOS 90D",
                    price: 1199.99,
                    originalPrice: 1399.99,
                    rating: 4.7,
                    reviews: 260,
                    image: "https://4.img-dpreview.com/files/p/TS2400x2400~sample_galleries/3453035806/9486788889.jpg",
                    badge: "Enthusiast",
                    specs: {
                        resolution: "32.5 MP",
                        videoQuality: "4K/30fps",
                        isoRange: "100–25600",
                        batteryLife: "1300 shots",
                        weight: "701g",
                        connectivity: ["Wi-Fi", "Bluetooth"]
                    },
                    features: ["Cropped 4K", "Fast Continuous AF", "Robust Ergonomics"],
                    description: "Top APS-C DSLR from Canon—great for hybrid photo/video."
                },
                {
                    id: 303,
                    name: "Canon EOS Rebel SL3 (250D)",
                    price: 699.99,
                    originalPrice: 799.99,
                    rating: 4.5,
                    reviews: 180,
                    image: "https://m.media-amazon.com/images/I/61UKoNH9IYL._UF894,1000_QL80_.jpg",
                    badge: "Budget",
                    specs: {
                        resolution: "24.1 MP",
                        videoQuality: "4K/24fps",
                        isoRange: "100–25600",
                        batteryLife: "1070 shots",
                        weight: "449g",
                        connectivity: ["Wi-Fi", "Bluetooth"]
                    },
                    features: ["Lightweight", "Vari-angle Touchscreen", "Great for Beginners"],
                    description: "Best entry-level DSLR—portable, versatile, and affordable."
                }
            ]
        }
    ];


    // Auto-play functionality
    useEffect(() => {
        let interval: number;
        if (isAutoPlay) {
            interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % productCategories.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, productCategories.length]);

    // Navigation functions
    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % productCategories.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + productCategories.length) % productCategories.length);

    // Product interaction functions
    const toggleFavorite = (productId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            newFavorites.has(productId) ? newFavorites.delete(productId) : newFavorites.add(productId);
            return newFavorites;
        });
    };

    const openProductPopup = (product: Product) => setSelectedProduct(product);
    const closeProductPopup = () => setSelectedProduct(null);

    // Current category
    //   const currentCategory = productCategories[currentSlide];

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section with Cinematic Video Background */}
            <div className="relative overflow-hidden mb-12 py-24">
                {/* High-Quality Video Background */}
                <div className="absolute inset-0 z-0">
                    <img className='w-full h-full object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/040/211/918/small_2x/ai-generated-bokeh-background-with-camera-lens-created-with-generative-ai-photo.jpg" alt="" />
                    {/* Semi-transparent overlay for improved text readability */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 text-center">
                    {/* Premium Collection Badge */}
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-sm font-semibold mb-6 animate-fade-in backdrop-blur-sm">
                        <Zap className="mr-2 animate-pulse" size={18} aria-hidden="true" />
                        Premium Photography Equipment
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Professional <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Camera Gear</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
                        Explore our exclusive collection of high-end cameras, precision lenses, and professional accessories for photographers of all levels
                    </p>
                </div>
            </div>
            <div className="max-w-full md:max-w-11/12 mx-auto px-4 relative ">


                {/* Slider controls */}
                <div className="flex justify-center items-center mb-8 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-yellow-600 hover transition-all duration-300 transform hover:scale-110"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${isAutoPlay
                                ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {isAutoPlay ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                            {isAutoPlay ? 'Pause' : 'Play'}
                        </button>

                        <div className="flex space-x-2">
                            {productCategories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-white rounded-full  flex items-center justify-center text-gray-600 hover:text-yellow-600 hover transition-all duration-300 transform hover:scale-110"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Products grid */}
                <div className="relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {productCategories.map((category) => (
                            <div key={category.id} className="w-full flex-shrink-0">
                                <div className={`${category.bgColor} rounded-3xl p-8 border border-gray-100`}>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {category.products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="bg-white rounded-2xl  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                                                onMouseEnter={() => setHoveredProduct(product.id)}
                                                onMouseLeave={() => setHoveredProduct(null)}
                                                onClick={() => openProductPopup(product)}
                                            >
                                                <div className="relative overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />

                                                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white  bg-gradient-to-r ${category.color}`}>
                                                        {product.badge}
                                                    </div>

                                                    <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                                                        }`}>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 transform hover:scale-110 ${favorites.has(product.id)
                                                                ? 'bg-red-500 text-white'
                                                                : 'bg-white text-gray-600 hover:text-red-500'
                                                                }`}
                                                        >
                                                            <Heart size={18} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                                                        </button>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); openProductPopup(product); }}
                                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-yellow-600  transition-all duration-300 transform hover:scale-110"
                                                        >
                                                            <Eye size={18} />
                                                        </button>
                                                    </div>

                                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                                                        }`} />
                                                </div>

                                                <div className="p-6">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={16}
                                                                    className={`${i < Math.floor(product.rating)
                                                                        ? 'text-yellow-400 fill-current'
                                                                        : 'text-gray-300'
                                                                        }`}
                                                                />
                                                            ))}
                                                            <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                                                        </div>
                                                    </div>

                                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                                                        {product.name}
                                                    </h4>

                                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                        {product.description}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex flex-col">
                                                            <span className="text-2xl font-bold text-gray-900">
                                                                ${product.price.toLocaleString()}
                                                            </span>
                                                            {product.originalPrice && (
                                                                <span className="text-sm text-gray-500 line-through">
                                                                    ${product.originalPrice.toLocaleString()}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`p-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105  bg-gradient-to-r ${category.color}`}
                                                        >
                                                            <ShoppingCart size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product detail popup */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
                        <div className="relative">
                            <button
                                onClick={closeProductPopup}
                                className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="lg:flex">
                                <div className="lg:w-1/2 relative">
                                    <div className="h-[500px] p-10 md:p-20 overflow-hidden flex justify-center items-center">

                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="w-full h-full object-contain scale-150"
                                        />
                                    </div>
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-semibold ">
                                            {selectedProduct.badge}
                                        </span>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 p-8">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                            {selectedProduct.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {selectedProduct.description}
                                        </p>

                                        <div className="flex items-center mb-4">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={`${i < Math.floor(selectedProduct.rating)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="ml-3 text-lg font-semibold text-gray-700">
                                                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Specifications</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {Object.entries(selectedProduct.specs).map(([key, value]) => (
                                                <div key={key} className="bg-gray-50 p-3 rounded-lg">
                                                    <div className="text-sm text-gray-600 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                    <div className="font-semibold text-gray-900">
                                                        {Array.isArray(value) ? value.join(', ') : value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                                        <div className="space-y-2">
                                            {selectedProduct.features.map((feature, index) => (
                                                <div key={index} className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <div className="text-3xl font-bold text-gray-900">
                                                    ${selectedProduct.price.toLocaleString()}
                                                </div>
                                                {selectedProduct.originalPrice && (
                                                    <div className="text-lg text-gray-500 line-through">
                                                        ${selectedProduct.originalPrice.toLocaleString()}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-yellow-600 font-semibold">
                                                    Save ${(selectedProduct.originalPrice! - selectedProduct.price).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button
                                                onClick={() => toggleFavorite(selectedProduct.id)}
                                                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${favorites.has(selectedProduct.id)
                                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                                    : 'border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500'
                                                    }`}
                                            >
                                                <Heart
                                                    size={20}
                                                    className="mr-2"
                                                    fill={favorites.has(selectedProduct.id) ? 'currentColor' : 'none'}
                                                />
                                                {favorites.has(selectedProduct.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                                            </button>
                                            <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105  flex items-center justify-center">
                                                <ShoppingCart size={20} className="mr-2" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default OtherProducts;