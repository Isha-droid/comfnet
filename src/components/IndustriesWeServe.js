import React, { useState, useEffect } from "react";

export default function IndustriesWeServe() {
    const industries = [
        {
            icon: "https://cdn.lordicon.com/zgxdholq.json",
            title: "Automotive & Manufacturing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        },
        {
            icon: "https://cdn.lordicon.com/vbbyobmk.json",
            title: "Financial Technology (Fintech)",
            description: "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.",
        },
        {
            icon: "https://cdn.lordicon.com/fqbvgezn.json",
            title: "Fast-Moving Consumer Goods",
            description: "Fusce nec tellus sed augue semper porta. Mauris massa.",
        },
        {
            icon: "https://cdn.lordicon.com/faoxhrsb.json",
            title: "Health & Medical Services",
            description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
        },
        {
            icon: "https://cdn.lordicon.com/oqicfpmd.json",
            title: "Renewable Energy",
            description: "Phasellus viverra nulla ut metus varius laoreet. Curabitur ullamcorper ultricies.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Dynamically load the Lordicon script
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.lordicon.com/lordicon.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-12 bg-blue-900 text-white">
            <div className="max-w-[calc(100%-280px)] mx-auto px-4">
                <h2 className="text-4xl mb-6">Industries We Serve</h2>
                <div>
                    {industries.map((industry, index) => (
                        <div key={index} className="py-4">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                {/* Left: Icon */}
                                <lord-icon
                                    src={industry.icon}
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}
                                    colors="primary:#ffffff"
                                ></lord-icon>

                                {/* Right: Number and Title */}
                                <div className="ml-4 flex items-center w-full justify-between ">
                                    <span className="text-right text-lg font-semibold">
                                        0{index + 1}.
                                    </span>
                                    <span className="text-lg font-semibold flex-1 text-right mr-3">
                                        {industry.title}
                                    </span>

                                    {/* Down Arrow */}
                                    <span
                                        className={`transform transition-transform ${
                                            activeIndex === index ? "rotate-180" : ""
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </div>
                            </div>

                            {/* Accordion content */}
                            {activeIndex === index && (
                                <div className="mt-4 text-gray-300">{industry.description}</div>
                            )}
                            <hr className="border-gray-700 mt-4" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
