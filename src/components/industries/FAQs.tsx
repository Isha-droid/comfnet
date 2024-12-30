import React from 'react';

const FAQ = () => {
  const faqs = [
    "What are your core products and services in the automotive and manufacturing industries?",
    "Can you provide a brief overview of your company’s expertise in automotive and manufacturing solutions?",
    "What industries do you primarily serve, and what makes your solutions stand out?",
    "Can you handle high-volume production runs, or do you focus on custom/low-volume manufacturing?",
    "Do you offer end-to-end production services, including design, prototyping, and testing?"
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-blue-800 text-center mb-6 p-8">
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
