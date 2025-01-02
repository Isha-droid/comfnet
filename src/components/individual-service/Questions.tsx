import React from 'react';

const FAQ = () => {
        const faqs = [
                "What are the key technologies or innovations developed by your company that are available for transfer or licensing?",
                "Are there any specific patents or intellectual properties your company actively promotes for technology transfer?",
                "Are there opportunities to co-develop or customize technologies to meet specific industry needs?",
                "What kind of post-transfer assistance do you offer to partners or licensees?",
                "Could you walk me through your technology transfer process, from initial inquiry to agreement?"
        ];

        return (
                <div className="p-8">
                        <h1 className="text-4xl font-semibold text-blue-700 text-center mb-6 p-8">
                                FAQ's
                        </h1>
                        <div className="space-y-4 flex flex-col ml-16 mr-16 text-justify">
                                {faqs.map((faq, index) => (
                                        <div
                                                key={index}
                                                className="flex items-center justify-between border-b border-gray-300 py-4"
                                        >
                                                <span className="text-gray-800 text-lg font-medium">
                                                        {index + 1 < 10 ? `0${index + 1}` : index + 1} {faq}
                                                </span>
                                                <span className="text-gray-500 text-2xl">&#9660;</span>
                                        </div>
                                ))}
                        </div>
                </div>
        );
};

export default FAQ;
