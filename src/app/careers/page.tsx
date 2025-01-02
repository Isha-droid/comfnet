import React from "react";
import Image from "next/image";

const CareerPage: React.FC = () => {
        return (
                <div className="bg-gray-50 min-h-screen">
                        {/* Hero Section */}
                        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-20 text-center relative">
                                <h1 className="text-5xl font-bold mb-4">Grow with us</h1>
                                <p className="text-lg max-w-xl mx-auto mb-8">
                                        Become a part of our team. Great innovations come from great minds,
                                        and great minds deserve good seats.
                                </p>
                                <button className="bg-yellow-500 text-gray-900 px-8 py-2 rounded-md font-medium hover:bg-yellow-600">
                                        Apply now
                                </button>
                                <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-500 rounded-full"></div>
                                <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-500 rounded-full"></div>
                        </section>

                        {/* Opportunities Section */}
                        <section className="container mx-auto py-16 px-8 space-y-16">
                                {/* Section 1 */}
                                <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
                                        <div className="lg:w-1/2 text-left">
                                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                                        Working together to create a better future
                                                </h2>
                                                <p className="text-lg text-gray-600 mb-6">
                                                        Discover the variety of career opportunities at Comfnet Solutions.
                                                </p>
                                                <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                                        Apply now
                                                </button>
                                        </div>
                                        <div className="lg:w-1/2 flex justify-center">
                                                <div className="w-64 h-64 bg-gray-300 rounded-md"></div>
                                        </div>
                                </div>

                                {/* Section 2 */}
                                <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
                                        <div className="lg:w-1/2 flex justify-center">
                                                <div className="w-64 h-64 bg-gray-300 rounded-md"></div>
                                        </div>
                                        <div className="lg:w-1/2 text-left">
                                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                                        You Will Be Heard
                                                </h2>
                                                <p className="text-lg text-gray-600">
                                                        We ensure that everyone's opinion is heard and valued in all
                                                        spaces. Expertise over experience.
                                                </p>
                                        </div>
                                </div>
                        </section>

                        {/* Job Exploration Section */}
                        <section className="bg-gray-100 py-16">
                                <div className="container mx-auto text-center">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                                Discover & Explore Your Job
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8">
                                                See open roles at Comfnet
                                        </p>
                                        <div className="flex justify-center space-x-4">
                                                <select className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm">
                                                        <option>All Positions</option>
                                                </select>
                                                <select className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm">
                                                        <option>All Locations</option>
                                                </select>
                                        </div>
                                </div>
                        </section>

                        {/* Join Us Section */}
                        <section className="bg-gray-50 py-16">
                                <div className="container mx-auto text-center">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                                Join a team that supports each other.
                                        </h2>
                                        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-8">
                                                <div>
                                                        <label className="block text-gray-600 mb-2">
                                                                Please attach your CV *
                                                        </label>
                                                        <input
                                                                type="file"
                                                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        />
                                                </div>
                                                <div>
                                                        <label className="block text-gray-600 mb-2">
                                                                Please enclose a cover letter
                                                        </label>
                                                        <input
                                                                type="file"
                                                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>
        );
};

export default CareerPage;
