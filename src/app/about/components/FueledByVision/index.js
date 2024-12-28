const FueledByVision=() =>
{
        return (
                <div className="bg-white p-8 text-center">
                        {/* Title */ }
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                                We are Fueled by Unified Vision
                        </h2>
                        {/* Subtitle */ }
                        <p className="text-gray-700 mb-8">
                                Empowering global connections through innovation for a collaborative and prosperous future.
                                We don't just build business partnerships — we create transformative connections that
                                inspire growth and innovation.
                        </p>
                        {/* Grid Section */ }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Image 1 */ }
                                <div className="bg-gray-200 p-4">
                                        <img
                                                src="/path-to-image1.jpg"
                                                alt="Teamwork"
                                                className="w-full h-48 md:h-full object-cover rounded"
                                        />
                                </div>
                                {/* Stat 1 */ }
                                <div className="bg-blue-900 text-white p-4 flex flex-col justify-center items-center rounded">
                                        <p className="text-4xl font-bold">5+</p>
                                        <p className="mt-2 text-lg">Glorious Years</p>
                                </div>
                                {/* Stat 2 */ }
                                <div className="bg-blue-900 text-white p-4 flex flex-col justify-center items-center rounded">
                                        <p className="text-4xl font-bold">150+</p>
                                        <p className="mt-2 text-lg">Projects Created</p>
                                </div>
                                {/* Image 2 */ }
                                <div className="bg-gray-200 p-4">
                                        <img
                                                src="/path-to-image2.jpg"
                                                alt="Meeting"
                                                className="w-full h-48 md:h-full object-cover rounded"
                                        />
                                </div>
                                {/* Image 3 */ }
                                <div className="bg-gray-200 p-4">
                                        <img
                                                src="/path-to-image3.jpg"
                                                alt="Collaboration"
                                                className="w-full h-48 md:h-full object-cover rounded"
                                        />
                                </div>
                        </div>
                </div>
        );
};

export default FueledByVision;
