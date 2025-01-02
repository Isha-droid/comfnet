import React from "react";

const Solutions = () => {
        return (
                <div className="flex justify-center gap-8 bg-white p-10 rounded-md">
                        <div className="flex-shrink-0">
                                <img
                                        src="/solutions.png"
                                        alt="Company Building"
                                        className="w-90 rounded-md shadow h-72"
                                />
                        </div>

                        <div className="flex flex-col gap-4 text-black">
                                <div className="flex gap-6">
                                        <div className="mt-6 flex flex-col gap-2">
                                                <p className="flex items-center gap-2">
                                                        <span className="text-blue-700">📍</span> Kajen 10, 20459 Hamburg,
                                                        Germany
                                                </p>
                                                <p className="flex items-center gap-2">
                                                        <span className="text-blue-700">📞</span> +49 (0)17676534176
                                                </p>
                                                <p className="flex items-center gap-2">
                                                        <span className="text-blue-700">✉️</span>{" "}
                                                        <a
                                                                href="mailto:info@COMFNET.de"
                                                                className="text-blue-700 underline"
                                                        >
                                                                info@COMFNET.de
                                                        </a>
                                                </p>
                                        </div>


                                        <div className="flex flex-col gap-4 border border-gray-300 p-6 rounded-md shadow-sm">
                                                <p className="text-gray-800">
                                                        <strong>Register court:</strong> Hamburg Local Court
                                                </p>
                                                <p className="text-gray-800">
                                                        <strong>Register number:</strong> HRB 187468
                                                </p>
                                                <p className="text-gray-800">
                                                        <strong>VAT ID:</strong> DE326877205
                                                </p>
                                        </div>

                                </div>

                                <div>
                                        <h3 className="text-blue-700 font-bold">Represented by:</h3>
                                        <div className="flex p-6 gap-12">
                                                <div className="flex items-center gap-3">
                                                        <img
                                                                src="/DRMoF.png"
                                                                alt="Dr. Mohammad Faizan"
                                                                className="w-12 h-12 rounded-full"
                                                        />
                                                        <p className="text-gray-800">Dr. Mohammad Faizan</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                        <img
                                                                src="/dr-faizan.jpg"
                                                                alt="Niha Nigar"
                                                                className="w-12 h-12 rounded-full"
                                                        />
                                                        <p className="text-gray-800">Niha Nigar</p>
                                                </div>
                                        </div>

                                </div>
                        </div>


                </div>
        );
};

export default Solutions;
