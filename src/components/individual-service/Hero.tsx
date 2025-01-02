"use client"
import React from 'react';

const TechnologyTransfer: React.FC = () => {
        return (
                <div
                        className="min-h-screen relative bg-black text-white flex flex-col justify-center items-center h-[80vh]"
                        style={{
                                backgroundImage: "url('/Header.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                        }}
                >
                        <div className="text-center">
                                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                                        Technology transfer services
                                </h1>
                                <p className="text-lg sm:text-xl mb-6">
                                        We bring the latest technology from India and Germany to GCC and Germany, ensuring seamless integration into your business.
                                </p>
                                <button
                                        className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all"
                                        onClick={() => window.alert('Schedule a call')}
                                >
                                        Schedule a call
                                </button>
                        </div>
                </div>
        );
};

export default TechnologyTransfer;
