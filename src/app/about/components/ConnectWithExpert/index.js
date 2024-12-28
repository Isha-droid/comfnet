const ConnectWithExpert=() =>
{
        const experts=[
                { id: 1, name: "Dr. Mohammad Faizan", role: "Founder & CEO", image: "/path-to-image1.jpg" },
                { id: 2, name: "Dr. John Doe", role: "Founder & CEO", image: "/path-to-image2.jpg" },
                { id: 3, name: "Dr. Jane Smith", role: "Founder & CEO", image: "/path-to-image3.jpg" },
                { id: 4, name: "Dr. Alex Johnson", role: "Founder & CEO", image: "/path-to-image4.jpg" },
                { id: 5, name: "Dr. Emily Brown", role: "Founder & CEO", image: "/path-to-image5.jpg" },
                { id: 6, name: "Dr. Michael Green", role: "Founder & CEO", image: "/path-to-image6.jpg" },
        ];

        return (
                <div className="bg-white text-black py-12 ">
                        {/* Header Section */ }
                        <div className="bg-blue-900 text-center mb-8 py-[20px] w-[90%] mx-auto rounded-xl">
                                <h2 className="text-3xl font-bold">Connect with an Expert</h2>
                                <p className="text-gray-300 mt-2">
                                        Unlock your data's potential with ComfNet. Start transforming your business today.
                                </p>
                                <button className="mt-4 bg-white text-blue-900 py-2 px-6 rounded hover:bg-gray-200">
                                        Speak to Our Team
                                </button>
                        </div>

                        {/* Experts Grid */ }
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                                { experts.map( ( expert ) => (
                                        <div
                                                key={ expert.id }
                                                className="bg-white text-blue-900 p-4 rounded-lg shadow-lg flex flex-col items-center"
                                        >
                                                <img
                                                        src={ expert.image }
                                                        alt={ expert.name }
                                                        className="rounded-full w-32 h-32 mb-4 object-cover border-4 border-blue-900"
                                                />
                                                <p className="font-bold text-lg">{ expert.name }</p>
                                                <p className="text-sm mt-1">{ expert.role }</p>
                                        </div>
                                ) ) }
                        </div>
                </div>
        );
};

export default ConnectWithExpert;
