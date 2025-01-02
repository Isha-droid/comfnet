import { experts } from "../../app/constants";

const ConnectWithExpert = () => {
        return (
                <div className="bg-white text-black py-12 flex flex-col items-center">
                        {/* Header Section */}
                        <div className="bg-blue-900 text-center mb-8 py-5 w-[90%] mx-auto rounded-xl">
                                <h2 className="text-3xl font-bold text-white">Connect with an Expert</h2>
                                <p className="text-gray-300 mt-2">
                                        Unlock your data's potential with ComfNet. Start transforming your business today.
                                </p>
                                <button className="mt-4 bg-white text-blue-900 py-2 px-6 rounded hover:bg-gray-200 transition-all">
                                        Speak to Our Team
                                </button>
                        </div>

                        {/* Experts Grid */}
                        <div className="max-w-[calc(100%-280px)] w-full px-4 grid grid-cols-12 gap-10">
                                {experts.map((expert) => (
                                        <div
                                                key={expert.id}
                                                className="group bg-white text-blue-900 p-4 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 col-span-4  flex items-center justify-center h-[350px]"
                                        >
                                                <img
                                                        src={expert.image}
                                                        alt={expert.name}
                                                        className="rounded-xl w-full h-[302px]] mb-4 object-cover border-4"
                                                />
                                                <div className="absolute inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                        <p className="font-bold text-lg">{expert.name}</p>
                                                        <p className="text-sm mt-1">{expert.role}</p>
                                                        <a
                                                                href={expert.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mt-2 text-blue-700 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
                                                        >
                                                                <i className="fab fa-linkedin text-xl"></i>
                                                        </a>
                                                </div>
                                        </div>
                                ))}


                                <div className="col-span-4  justify-center ">
                                        <div className="bg-blue-900 flex flex-col gap-12 h-[350px] text-white p-8 rounded-lg w-full max-w-[400px] flex flex-col items-center text-center shadow-lg">
                                                <h3 className="text-2xl font-bold mb-2">Join Our Team Today!</h3>
                                                <p className="text-gray-300 mb-4">
                                                        Exciting Opportunities await. Explore careers with us and be part of our success story.
                                                </p>
                                                <button className="flex items-center justify-center bg-white text-blue-900 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-all">
                                                        <span className="mr-2">→</span> Available Jobs
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ConnectWithExpert;







// import { experts } from "../../app/constants";

// const ConnectWithExpert = () => {
//         return (
//                 <div className="bg-white text-black py-12 flex flex-col items-center">
//                         {/* Header Section */}
//                         <div className="bg-blue-900 text-center mb-8 py-5 w-[90%] mx-auto rounded-xl">
//                                 <h2 className="text-3xl font-bold text-white">Connect with an Expert</h2>
//                                 <p className="text-gray-300 mt-2">
//                                         Unlock your data's potential with ComfNet. Start transforming your business today.
//                                 </p>
//                                 <button className="mt-4 bg-white text-blue-900 py-2 px-6 rounded hover:bg-gray-200 transition-all">
//                                         Speak to Our Team
//                                 </button>
//                         </div>

//                         {/* Experts Grid */}
//                         <div className="max-w-[calc(100%-280px)] w-full px-4 grid grid-cols-12 gap-4">
//                                 {experts.map((expert) => (
//                                         <div
//                                                 key={expert.id}
//                                                 className="group bg-white text-blue-900 p-4 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 col-span-4 flex items-center justify-center"
//                                         >
//                                                 <img
//                                                         src={expert.image}
//                                                         alt={expert.name}
//                                                         className="rounded-xl w-full h-[302px] mb-4 object-cover border-4"
//                                                 />
//                                                 <div className="absolute bottom-0 h-[30%] w-full bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                                                         <p className="font-bold text-lg">{expert.name}</p>
//                                                         <p className="text-sm mt-1">{expert.role}</p>
//                                                         <a
//                                                                 href={expert.linkedin}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="mt-2 text-blue-700 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
//                                                         >
//                                                                 <i className="fab fa-linkedin text-xl"></i>
//                                                         </a>
//                                                 </div>
//                                         </div>
//                                 ))}
//                         </div>
//                 </div>
//         );
// };

// export default ConnectWithExpert;
