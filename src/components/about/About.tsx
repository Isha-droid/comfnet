import React from "react";

const About = () => {
        return (
                <div
                        className="min-h-screen bg-cover bg-center text-white py-16 px-6 flex flex-col justify-center gap-12"
                        style={{
                                backgroundImage: "url('/images/about-bg.png')",
                        }}
                >
                        {/* About Us Section */}
                        <div className="max-w-5xl mx-auto text-center bg-black bg-opacity-60 p-6 rounded-md">
                                <h1 className="text-3xl font-bold mb-6 text-left">About us</h1>
                                <p className="text-lg leading-relaxed mb-10 text-left">
                                        We’re on a mission to revolutionize businesses through innovation, global partnerships, and cutting-edge technology.We’re on a mission to revolutionize businesses through innovation, global partnerships, and cutting-edge technology.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                        <div>
                                                <p className="text-2xl font-semibold">60000+</p>
                                                <p className="text-sm text-gray-400">Lines of Code</p>
                                        </div>
                                        <div>
                                                <p className="text-2xl font-semibold">98%</p>
                                                <p className="text-sm text-gray-400">On-time delivery</p>
                                        </div>
                                        <div>
                                                <p className="text-2xl font-semibold">110+</p>
                                                <p className="text-sm text-gray-400">Happy customers</p>
                                        </div>
                                        <div>
                                                <p className="text-2xl font-semibold">5+</p>
                                                <p className="text-sm text-gray-400">Glorious Years</p>
                                        </div>
                                </div>
                        </div>

                        {/* Horizontal Line with Countries */}
                        <div className="relative mt-16">
                                <div className="flex justify-between items-center max-w-4xl mx-auto text-sm text-gray-400 relative z-10">
                                        <span className="px-2">Germany</span>
                                        <span className="px-2">Saudi Arabia</span>
                                        <span className="px-2">UAE</span>
                                        <span className="px-2">India</span>
                                </div>
                                {/* Line and dots */}
                                <div className="relative mt-6">
                                        <div className="absolute w-full border-t border-gray-600 top-1/2" />
                                        <div className="flex justify-between items-center max-w-4xl mx-auto relative z-10">
                                                <span className="h-3 w-3 bg-blue-700 rounded-full transform translate-y-[-50%]"></span>
                                                <span className="h-3 w-3 bg-blue-700 rounded-full transform translate-y-[-50%]"></span>
                                                <span className="h-3 w-3 bg-blue-700 rounded-full transform translate-y-[-50%]"></span>
                                                <span className="h-3 w-3 bg-blue-700 rounded-full transform translate-y-[-50%]"></span>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default About;
