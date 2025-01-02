
export default function WhyChooseUs ( { reasons } )
{

        return (
                <section className="py-12 bg-gray-100">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-6">
                                <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Why Choose Us?</h2>
                                <div className="grid grid-cols-10 gap-6">
                                        { reasons.map( ( reason, index ) => (
                                                <div key={ index } className="col-span-10 md:col-span-5 lg:col-span-5">
                                                        <div className="flex flex-col items-start text-center p-6">
                                                                <img
                                                                        src={ `images/${ reason.image }` }
                                                                        alt={ reason.title }
                                                                        className="w-full h-[215px] object-cover rounded mb-4"
                                                                />
                                                                <h3 className="text-lg text-black font-semibold mb-2">{ reason.title }</h3>
                                                                <p className="text-sm text-left text-gray-600">{ reason.description }</p>
                                                        </div>
                                                </div>
                                        ) ) }
                                </div>
                        </div>
                </section>
        );
}
