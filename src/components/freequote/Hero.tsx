export default function Hero() {
        return (
                <div className="relative bg-white text-white " style={{
                        minHeight: "80vh"
                }}>

                        <div className="min-h-screen relative w-screen px-40 py-36" style={{
                                backgroundImage: 'url(/free_hero.jpg)', // Ensure hero image path is correct
                                backgroundSize: 'cover',
                                minHeight: "80vh"
                        }}>

                                <h1 className="text-4xl font-bold w-[62vw] text-left">
                                        Let's Build The Future Together
                                </h1>
                                <div className="mt-10">
                                        <h2 className="text-lg">Ready to grow your business with world-class talent</h2>
                                        <h2 className="text-lg">and technology solutions?</h2>
                                </div>
                                {/* <p className="mt-4 text-lg">The secret? <h1 className='text-bold text-3xl my-4'>Someone made the connection.</h1></p> */}

                                <div className='flex-1 items-center justify-between mt-10'>
                                        <h2>Unlock your business potential, get your free consultation.</h2>
                                        <button className="bg-[#ffa200] text-black font-extralight px-6 py-2 rounded-full mt-6">
                                                <div className="flex items-center gap-5">
                                                        <img src="/arrow.svg" alt="arrow" />Start Now
                                                </div>
                                        </button>
                                </div>
                        </div>
                </div>
        )
}