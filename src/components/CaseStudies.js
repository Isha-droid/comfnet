export default function CaseStudies ()
{
        const studies=[
                {
                        title: 'Connected Mobility Solution',
                        description: 'Developing an advanced connected solution for a leading automotive manufacturer to improve customer experience.',
                        image: 'images/mobility.jpg',
                },
                {
                        title: 'Crane Safety and Efficiency',
                        description: 'Enhancing safety and operational efficiency for a top crane manufacturer through innovative cluster solutions.',
                        image: 'images/crane.jpg',
                },
                {
                        title: 'Intelligent Security Systems',
                        description: 'Creating secure systems with cutting-edge security technology for enterprises.',
                        image: 'images/security.jpg',
                },
        ];

        return (
                <section className="py-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                                <h2 className="text-2xl font-bold text-blue-600">Case studies</h2>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        { studies.map( ( study, index ) => (
                                                <div key={ index } className="bg-gray-100 p-4 rounded shadow">
                                                        <img src={ study.image } alt={ study.title } className="rounded" />
                                                        <h3 className="mt-4 font-bold">{ study.title }</h3>
                                                        <p className="text-gray-600 mt-2">{ study.description }</p>
                                                </div>
                                        ) ) }
                                </div>
                        </div>
                </section>
        );
}
