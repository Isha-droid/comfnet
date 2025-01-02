import React from "react";

const Header: React.FC = () => {
        return (
                <header className="min-h-screen relative bg-gray-800 py-16">
                        <div className=" container mx-auto text-center px-6">
                                {/* Title Section */}
                                <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                                        Grow with us
                                </h1>
                                <p className="text-gray-300 text-lg mt-4">
                                        Become a part of our team
                                </p>
                                <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
                                        Great innovations come from great minds, and great minds deserve good seats.
                                        It's important to us to give you the best seat so you can contribute and do
                                        the work you really love. Which is a win-win. If this resonates with you,
                                        there's bound to be a position with your name on it.
                                </p>
                                {/* Call to Action */}
                                <button
                                        className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded mt-6 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        aria-label="Apply now"
                                >
                                        Apply now
                                </button>
                                {/* Decorative SVG */}
                                <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"
                                        role="img"
                                        aria-hidden="true"
                                >
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-48 w-48 md:h-64 md:w-64 text-gray-700"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                        >
                                                <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm0-10h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                                />
                                        </svg>
                                </div>
                        </div>
                </header>
        );
};

export default Header;
