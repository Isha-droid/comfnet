const WhyWorkWithUs=() =>
{
        return (
                <div className="bg-white py-12">
                        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Why Work With Us</h1>
                        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
                                At COMFNET Solutions GmbH, we empower businesses in Germany and the Gulf Cooperation Council (GCC),
                                Saudi Arabia, and UAE in particular, by connecting them with top global talent and cutting-edge technology.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                        <img
                                                src="/path-to-global-reach-image.jpg"
                                                alt="Global Reach"
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                                        <p className="text-gray-600">
                                                We will connect you with the highly talented and the most advanced technology from around the globe.
                                        </p>
                                </div>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                        <img
                                                src="/path-to-proven-track-record-image.jpg"
                                                alt="Proven Track Record"
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Track Record</h3>
                                        <p className="text-gray-600">
                                                Over the years, we have successfully placed a lot of highly skilled people and facilitated technology
                                                transfer to numerous Indian and German Companies.
                                        </p>
                                </div>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                        <img
                                                src="/path-to-customized-solutions-image.jpg"
                                                alt="Customized Solutions"
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Customized Solutions</h3>
                                        <p className="text-gray-600">
                                                Whether it is staffing or technology-related, we tailor our services to your specific business requirements.
                                        </p>
                                </div>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                        <img
                                                src="/path-to-client-success-metrics-image.jpg"
                                                alt="Client success Metrics"
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Client success Metrics</h3>
                                        <p className="text-gray-600">
                                                Clients get up to 30% productivity boosts, it has launched new connected product lines and it also improved
                                                the safety and the operational efficiency.
                                        </p>
                                </div>
                        </div>
                        <div className="bg-blue-900 text-white py-9 mt-10 text-center w-screen">
                                <p className="text-lg font-medium">
                                        "We don't just connect regions; we empower businesses to thrive on the global stage"
                                </p>
                        </div>
                </div>
        );
};

export default WhyWorkWithUs;
