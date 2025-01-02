import React from 'react';

interface ApproachStep {
        title: string;
        description: string;
        icon: string; // Icon as an image URL
}

interface ApproachProps {
        title: string;
        subtitle: string;
        steps: ApproachStep[];
}

const Approach: React.FC<ApproachProps> = ({ title, subtitle, steps }) => {
        return (
                <div className="bg-blue-900 text-white py-16 px-8 grid grid-cols-12 gap-8 place-items-center">
                        {/* Main Title Section */}
                        <div className="col-span-12 text-center">
                                <h2 className="text-3xl font-bold">{title}</h2>
                                <p className="mt-4 text-gray-300">{subtitle}</p>
                        </div>

                        {/* Steps Section */}
                        <div className="max-w-[calc(100%-280px)] col-span-12 grid grid-cols-12 gap-y-32 mt-8">
                                {steps.map((step, index) => {
                                        // Check if index is odd or even to toggle layout
                                        const isReversed = index % 2 !== 0;

                                        return (
                                                <div
                                                        key={index}
                                                        className={`col-span-12 flex flex-row ${isReversed ? "flex-row-reverse" : ""
                                                                } justify-between gap-x-28`}
                                                >
                                                        <div className="col-span-7 flex flex-col gap-6 justify-center">
                                                                <h3 className="text-xl font-bold">{step.title}</h3>
                                                                <p className="text-gray-300">{step.description}</p>
                                                        </div>
                                                        <div className="col-span-5 flex items-center">
                                                                <img
                                                                        src={step.icon}
                                                                        alt={step.title}
                                                                        className="max-w-[204px] max-h-[204px]"
                                                                />
                                                        </div>
                                                </div>
                                        );
                                })}
                        </div>
                </div>
        );
};

export default Approach;
