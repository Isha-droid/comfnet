import React from "react";
import Form from "./Form";

interface SectionProps {
        title: string;
        subtitle: string;
        buttonText?: string; // Optional prop
        showForm?: boolean;  // Optional prop
        bgColor?: string;    // Optional prop for background color
}

const Section: React.FC<SectionProps> = ({
        title,
        subtitle,
        buttonText,
        showForm,
        bgColor = "bg-white",
}) => {
        return (
                <section
                        className={`mt-12 text-center shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out ${bgColor}`}
                >
                        <h2 className="text-3xl font-extrabold mb-4 text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out">
                                {title}
                        </h2>
                        <p className="text-lg mb-6 text-gray-600 hover:text-gray-500 transition-colors duration-300 ease-in-out">
                                {subtitle}
                        </p>
                        {buttonText && (
                                <button
                                        className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out"
                                        aria-label={buttonText}
                                >
                                        {buttonText}
                                </button>
                        )}
                        {showForm && <Form />}
                </section>
        );
};

export default Section;
