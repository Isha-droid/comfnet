const About=() =>
{
        return (
                <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 flex flex-col justify-center gap-7">
                        <div className="max-w-5xl mx-auto text-center">
                                <h1 className="text-3xl font-bold mb-6 text-left">About us</h1>
                                <p className="text-lg leading-relaxed mb-10 text-left">
                                        We're on a mission to revolutionize businesses through innovation, global
                                        partnerships, and cutting-edge technology.
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
                        <div className="flex justify-around items-center mt-16 text-sm text-gray-400">
                                <span>Germany</span>
                                <span>India</span>
                                <span>GCC</span>
                                <span>GCC</span>
                        </div>
                </div>
        );
};

export default About;
