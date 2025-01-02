'use client';
import React from 'react';

export default function MissionVision ()
{
        return (
                <div className="mx-auto px-32 py-16 bg-slate-100 max-w-[1440px]">
                        <h2 className="text-5xl font-bold text-center text-blue-700 mb-10">
                                Unveiling Our<br /> Mission & Vision
                        </h2>
                        <h4 className="text-gray-800 text-lg w-[70%] text-center mx-auto my-8 leading-relaxed">
                                At COMFNET Solutions GmbH, we empower businesses in Germany and the Gulf Cooperation Council (GCC), Saudi Arabia and UAE in particular, by connecting them with top global talent and cutting-edge technology.
                        </h4>
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                                {/* Our Mission Section */ }
                                <div className="text-gray-800 flex-1 text-center p-6">
                                        <img
                                                src="images/our_mission.png"
                                                alt="Our Mission"
                                                className="w-20 h-20 mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-bold">Our Mission</h3>
                                        <p className="mt-4 leading-relaxed">
                                                To bridge regional expertise, enabling our clients to thrive in international markets through innovation, collaboration, and strategic growth.
                                        </p>
                                </div>

                                {/* Our Vision Section */ }
                                <div className="text-gray-800 flex-1 text-center p-6 ">
                                        <img
                                                src="images/our_vision.png"
                                                alt="Our Vision"
                                                className="w-20 h-20 mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-bold">Our Vision</h3>
                                        <p className="mt-4 leading-relaxed">
                                                Empowering global connections through innovation for a collaborative and prosperous future.
                                        </p>
                                </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 mt-10">
                                {/* First element spans 6 columns */ }
                                <img
                                        src="images/Mission&vision 1.svg"
                                        alt="Team"
                                        className="w-full h-full rounded-md shadow-lg col-span-6 object-cover"
                                />

                                {/* Second element spans 3 columns */ }
                                <div
                                        className="w-full h-full flex flex-col justify-center items-center bg-blue-700 text-white p-6 rounded-md shadow-md col-span-3"
                                >
                                        <h3 className="text-3xl font-bold">5+</h3>
                                        <p>Glorious Years</p>
                                </div>

                                {/* Third element spans 3 columns */ }
                                <div
                                        className="w-full h-full flex flex-col justify-center items-center bg-gray-800 text-white p-6 rounded-md shadow-md col-span-3"
                                >
                                        <h3 className="text-3xl font-bold">150+</h3>
                                        <p>Projects Created</p>
                                </div>

                                {/* Fourth element spans 3 columns */ }
                                <img
                                        src="images/Mission&vision 2.svg"
                                        alt="Meeting"
                                        className="w-full h-full rounded-md shadow-lg col-span-3 object-cover"
                                />

                                {/* Fifth element spans 3 columns */ }
                                <img
                                        src="images/Mission&vision 3.svg"
                                        alt="Discussion"
                                        className="w-full h-full rounded-md shadow-lg col-span-6 object-cover"
                                />

                                {/* Sixth element spans 6 columns */ }
                                <img
                                        src="images/Mission&vision 4.svg"
                                        alt="Presentation"
                                        className="w-full h-full rounded-md shadow-lg col-span-3 object-cover"
                                />
                        </div>
                </div>
        );
}
