const IndustriesWeServe=() =>
{
        const industries=[
                { id: 1, name: 'Automotive & Manufacturing' },
                { id: 2, name: 'Health & Medical Services' },
                { id: 3, name: 'Automotive & Manufacturing' },
                { id: 4, name: 'Automotive & Manufacturing' },
        ];

        const logos=[
                { src: '/path-to-global-logic-logo.png', alt: 'Global Logic' },
                { src: '/path-to-tech-mahindra-logo.png', alt: 'Tech Mahindra' },
                { src: '/path-to-beiersdorf-logo.png', alt: 'Beiersdorf' },
                { src: '/path-to-techwave-logo.png', alt: 'Techwave' },
        ];

        return (
                <div className="bg-white py-10 px-4">
                        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                                Industries we serve
                        </h1>

                        <div className="max-w-4xl mx-auto border-t border-b border-gray-300">
                                { industries.map( ( industry, index ) => (
                                        <div
                                                key={ industry.id }
                                                className="flex justify-between items-center py-4 border-b border-gray-300 last:border-none"
                                        >
                                                <span className="font-bold text-gray-800">{ `0${ index+1 }` }</span>
                                                <span className="flex-1 text-left text-gray-700 px-4">
                                                        { industry.name }
                                                </span>
                                                <span className="text-gray-500 text-lg cursor-pointer">↓</span>
                                        </div>
                                ) ) }
                        </div>

                        <div className="flex justify-center items-center gap-8 mt-8">
                                { logos.map( ( logo, index ) => (
                                        <img
                                                key={ index }
                                                src={ logo.src }
                                                alt={ logo.alt }
                                                className="h-12 object-contain"
                                        />
                                ) ) }
                        </div>
                </div>
        );
};

export default IndustriesWeServe;
