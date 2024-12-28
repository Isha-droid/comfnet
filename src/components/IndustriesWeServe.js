export default function IndustriesWeServe ()
{
        const industries=[
                'Automotive & Manufacturing',
                'Financial Technology (Fintech)',
                'Fast-Moving Consumer Goods',
                'Health & Medical Services',
                'Renewable Energy',
        ];

        return (
                <section className="py-12 bg-blue-900 text-white">
                        <div className="max-w-7xl mx-auto px-4">
                                <h2 className="text-2xl font-bold">Industries we serve</h2>
                                <div className="mt-6">
                                        { industries.map( ( industry, index ) => (
                                                <div
                                                        key={ index }
                                                        className="flex justify-between py-4 border-b border-gray-700"
                                                >
                                                        <p>{ industry }</p>
                                                        <p className="text-gray-400">0{ index+1 }</p>
                                                </div>
                                        ) ) }
                                </div>
                        </div>
                </section>
        );
}