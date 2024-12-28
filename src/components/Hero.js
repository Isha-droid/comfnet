import Companies from './Companies'
export default function Hero ()
{
        return (
                <div className="relative bg-white text-white " style={ {
                        minHeight: "92vh"
                } }>

                        <div className="relative w-screen px-24 py-20" style={ {
                                backgroundImage: 'url(/images/hero.avif)', // Ensure hero image path is correct
                                backgroundSize: 'cover',
                                minHeight: "72vh"
                        } }>
                                <h1 className="text-4xl font-bold w-[62vw] text-left">
                                        Foreign people and technology drive more than 90% of the most successful U.S. tech companies.
                                </h1>
                                <p className="mt-4 text-lg">The secret? <h1 className='text-bold text-3xl my-4'>Someone made the connection.</h1></p>
                                <div className='flex flex-row items-center justify-between mt-28'><button className="bg-yellow-500 text-black px-6 py-3 rounded mt-6">
                                        Get your consultation - Free
                                </button>
                                        <span>
                                        </span>‘’Global Talent Fuels Innovation- Unveiling the Secret to Teach Success.”</div>
                        </div>

                        <Companies />
                </div>
        );
}
