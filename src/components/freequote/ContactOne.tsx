export default function ContactOne() { 
    return( 
        <div className="flex justify-center space-x-20 items-center my-40 mx-20">
                <div className="space-y-8">
                        <h1 className="font-bold text-3xl text-[#124195]">Contact Us</h1>
                        <div>
                            <h2 className="text-black">Locations</h2>
                            <select 
                            title="Country"
                            className="border-gray-400 rounded-lg border py-3 px-2 focus:ring-gray-600 font-bold w-full">
                                <option>Hamburg, Germany</option>
                            </select>
                        </div>
                        <div className="text-black">
                            <p>Intrested in joining our growing team?</p>
                            <a href="#" className="underline decoration-black">Explore Careers with COMFNET</a>
                        </div>
                </div>
                <img 
                alt="contact"
                src="/contactone.jpg" 
                className = "w-[600px] rounded-xl"
                />
        </div>
    )
}