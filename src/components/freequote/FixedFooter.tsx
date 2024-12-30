export default function FixedFooter() { 
    return ( 
        <div className="bg-white text-black border-2 flex py-3 items-center justify-evenly shadow-lg fixed bottom-0 w-full" >
                <p>Contact us today to discuss how Comfnet Consulting can help <br/>
                you achieve your goals.</p>
                <button className="bg-[#ffa200] text-black font-bold text-md px-10 py-3 rounded-full">
                    Get your free consultation
                </button>
        </div>
    )
}