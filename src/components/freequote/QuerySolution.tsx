"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: '01',
    question: "What is ComfNet Solutions' process for new IT projects?",
    answer: "ComfNet follows a structured process: consultation, tailored proposal, agreement on scope and pricing, implementation, and ongoing support."
  },
  {
    id: '02',
    question: "How is pricing determined at ComfNet Solutions?",
    answer: "Pricing details available upon consultation"
  },
  {
    id: '03',
    question: "Automotive & Manufacturing",
    answer: "Information about automotive and manufacturing solutions"
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex mt-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2 p-6">
          Your Queries,<br />Our Solutions
        </h1>
        <p className="text-gray-600 mb-4 p-6">
          Explore common questions about our process, pricing, and timelines. 
          Understand what to expect when working with ComfNet Solutions.
        </p>
        <button className="text-blue-700 flex items-center hover:underline p-6">
          More FAQs
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4 p-6 max-w-2xl">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-200 last:border-0"
          >
            <button
              className="w-full py-4 flex justify-between items-center hover:text-blue-700 transition-colors duration-200"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{faq.id}</span>
                <span className="text-left font-medium text-black">{faq.question}</span>
              </div>
              {openId === faq.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openId === faq.id && (
              <div className="pb-4 px-8 text-gray-600 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;