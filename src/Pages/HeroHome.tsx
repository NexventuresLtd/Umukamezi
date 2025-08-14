import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, ShoppingCart } from 'lucide-react';

const CameraHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample camera products for sliding
    const cameraProducts = [
        {
            id: 1,
            name: "Canon EOS R5",
            price: "$3,899",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&h=400&fit=crop",
            specs: "45MP Full Frame • 8K Video"
        },
        {
            id: 2,
            name: "Sony A7 IV",
            price: "$2,499",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&h=400&fit=crop",
            specs: "33MP Full Frame • 4K 60p"
        },
        {
            id: 3,
            name: "Nikon Z9",
            price: "$5,499",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=400&fit=crop",
            specs: "45.7MP Stacked CMOS • 8K 30p"
        },
        {
            id: 4,
            name: "Fujifilm X-T5",
            price: "$1,699",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop",
            specs: "40MP X-Trans • Film Simulations"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % cameraProducts.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cameraProducts.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + cameraProducts.length) % cameraProducts.length);
    };

    return (
        <section className="relative min-h-screen overflow-hidden max-lg:py-20 bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="umukamezi.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-11/12 mx-auto px-4 py-20 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Professional Photography Equipment
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                Capture
                                <span className="block text-yellow-400">Every Moment</span>
                                <span className="block text-3xl lg:text-4xl font-normal mt-2 text-gray-200">
                                    With Precision
                                </span>
                            </h1>

                            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                                Discover our premium collection of professional cameras, lenses, and accessories.
                                From amateur enthusiasts to professional photographers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/products"
                                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Shop Now
                            </a>

                            <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20">
                                <Play className="w-5 h-5 mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                                <div className="text-gray-300">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-yellow-400">1000+</div>
                                <div className="text-gray-300">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                                <div className="text-gray-300">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Slider */}
                    <div className="relative">
                        <div className="bg-transparent backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="relative overflow-hidden">

                                {/* Product Card */}
                                <div className="transition-all duration-500 ease-in-out">
                                    <div className="bg-white/10 rounded-2xl p-6 shadow-2xl">
                                        <div className="relative mb-6 group">
                                            <img
                                                src={cameraProducts[currentSlide].image}
                                                alt={cameraProducts[currentSlide].name}
                                                className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                Featured
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">
                                                    {cameraProducts[currentSlide].name}
                                                </h3>
                                                <p className="text-white">
                                                    {cameraProducts[currentSlide].specs}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={16} fill="currentColor" />
                                                        ))}
                                                    </div>
                                                    <span className="text-gray-600 text-sm">
                                                        ({cameraProducts[currentSlide].rating})
                                                    </span>
                                                </div>
                                                <div className="text-2xl font-bold text-gray-100">
                                                    {cameraProducts[currentSlide].price}
                                                </div>
                                            </div>

                                            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {cameraProducts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-yellow-400 w-8'
                                                : 'bg-white/40 hover:bg-white/60'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse hidden lg:block"></div>
            <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/30 rounded-full animate-bounce hidden lg:block"></div>
            <div className="absolute top-1/3 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping hidden lg:block"></div>
        </section>
    );
};

export default CameraHeroSection;