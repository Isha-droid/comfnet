export default function MissionVision ()
{
        return (
                <div className="mx-auto px-4 py-16 bg-slate-100">
                        <h2 className="text-5xl font-bold text-center text-blue-600 mb-10">Unveiling Our<br></br> Mission & Vision</h2>
                        <h4 className="text-gray-800 w-[70vw] text-center mx-auto my-8">At COMFNET Solutions GmbH, we empower businesses in Germany and the Gulf Cooperation Council (GCC), Saudi Arabia and UAE in particular, by connecting them with top global talent and cutting-edge technology. </h4>
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div className="text-gray-800 flex-1 text-center bg-gray-200 p-6 rounded">
                                        <h3 className="text-xl font-bold">Our Mission</h3>
                                        <p className="mt-4">To bridge regional expertise, enabling our clients to thrive in international markets through innovation, collaboration, and strategic growth.</p>
                                </div>
                                <div className="text-gray-800 flex-1 text-center bg-gray-200 p-6 rounded">
                                        <h3 className="text-xl font-bold">Our Vision</h3>
                                        <p className="mt-4">Empowering global connections through innovation for a collaborative and prosperous future.</p>
                                </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                                <img src="/images/Mission&vision 1.svg" alt="Team" className="rounded" />
                                <img src="/images/Mission&vision 2.svg" alt="Meeting" className="rounded" />
                                <div className="flex flex-col justify-center items-center bg-blue-600 text-white p-6 rounded">
                                        <h3 className="text-2xl font-bold">5+</h3>
                                        <p>Glorious Years</p>
                                </div>
                                <div className="flex flex-col justify-center items-center bg-gray-800 text-white p-6 rounded">
                                        <h3 className="text-2xl font-bold">150+</h3>
                                        <p>Projects Created</p>
                                </div>
                        </div>
                </div>
        );
}