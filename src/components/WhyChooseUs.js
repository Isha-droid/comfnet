export default function WhyChooseUs ()
{
        const reasons=[
                {
                        title: 'Global Reach',
                        description:
                                'We will connect you with the highly talented and the most advanced technology from around the globe.',
                        image: 'Why choose us (global reach img).svg',
                },
                {
                        title: 'Customized Solutions',
                        description:
                                'Whether it is staffing or technology-related, we tailor our services to your specific business requirements.',
                        image: 'Why choose us (automated solutions img).svg',
                },
                {
                        title: 'Proven Track Record',
                        description:
                                'Over the years, we have successfully placed a lot of highly skilled people & facilitated technology transfer to numerous Indian and German Companies.',
                        image: 'Why choose us (proven track record img).svg',
                },
                {
                        title: 'Client Success Metrics',
                        description:
                                'Clients got up to 30% productivity boosts, launched new connected products, and also improved the safety and operational efficiency.',
                        image: 'Why choose us (client success metrics img).svg',
                },
        ];

        return (
                <section className="py-12 bg-gray-100">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-4">
                                <h2 className="text-2xl font-bold text-blue-600">Why choose US?</h2>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        { reasons.map( ( reason, index ) => (
                                                <div key={ index } className="flex items-start space-x-4">
                                                        <img
                                                                src={ `images/${ reason.image }` }
                                                                alt={ reason.title }
                                                                className="w-16 h-16 rounded"
                                                        />
                                                        <div>
                                                                <h3 className="font-bold">{ reason.title }</h3>
                                                                <p className="text-gray-600 mt-2">{ reason.description }</p>
                                                        </div>
                                                </div>
                                        ) ) }
                                </div>
                        </div>
                </section>
        );
}
