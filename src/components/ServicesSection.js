import Button from '../components/Button'
export default function ServicesSection ( { title, description, tags, image, reverse } )
{
        return (
                <div
                        className={ `flex flex-col-reverse md:flex-row ${ reverse? 'md:flex-row-reverse':''
                                } items-center gap-8 py-12 max-w-7xl mx-auto` }
                >
                        <div className="md:w-1/2 px-4">
                                <h2 className="text-2xl font-bold text-blue-600">{ title }</h2>
                                <p className="mt-4 text-gray-700">{ description }</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                        { tags.map( ( tag, index ) => (
                                                <span
                                                        key={ index }
                                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                                >
                                                        { tag }
                                                </span>
                                        ) ) }
                                </div>
                                <Button />
                        </div>
                        <div className="md:w-1/2 px-4">
                                <img src={ `images/${ image }` } alt={ title } className="rounded shadow-md" />
                        </div>
                </div>
        );
}
