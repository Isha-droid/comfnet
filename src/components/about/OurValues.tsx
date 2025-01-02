const OurValues = () => {
        const values = [
                { id: 1, text: "We always hold integrity towards our clients" },
                { id: 2, text: "We are deeply committed towards our client success" },
                { id: 3, text: "We always excel at what we do" },
                { id: 4, text: "We prioritize innovation to deliver value" },
                { id: 5, text: "We foster collaboration across all levels" },
                { id: 6, text: "We ensure accountability in all our actions" },
        ];

        return (
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                        {values.map((value) => (
                                <div
                                        key={value.id}
                                        className={`relative flex flex-col items-center justify-center h-40 md:h-full text-center ${value.id % 2 === 0
                                                ? "bg-white text-blue-900"
                                                : "bg-blue-900 text-white"
                                                }`}
                                >
                                        <span className="absolute text-6xl md:text-8xl font-bold text-gray-300">
                                                {value.id}
                                        </span>
                                        <p className="relative text-lg font-medium z-10 px-4">{value.text}</p>
                                </div>
                        ))}
                </div>
        );
};

export default OurValues;
