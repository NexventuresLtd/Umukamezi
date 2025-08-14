import { Camera, BookOpen } from 'lucide-react';

const CameraBlogHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden h-[450px] pt-6">
            {/* Background Pattern */}
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

            <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 rounded-full px-3 py-1 text-yellow-400 text-xs font-medium mb-4">
                        <BookOpen size={14} />
                        <span>Photography Blog</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Capture Every
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Perfect Moment
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                        Discover professional photography tips, camera reviews, and industry insights from
                        <span className="text-yellow-400 font-semibold"> Umukamezi's </span>
                        expert team.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                        <button className="group bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm">
                            <span className="flex items-center gap-2">
                                Explore Articles
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <button className="group border-2 border-gray-600 hover:border-yellow-600 text-white hover:text-yellow-400 font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm">
                            <span className="flex items-center gap-2">
                                <Camera size={16} />
                                Shop Cameras
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CameraBlogHero;