'use client';

import Image from 'next/image';
import Companies from "../../components/Companies"
import Button from "../../components/Button"
const CaseStudies=() =>
{
        return (
                <div className="min-h-screen bg-gray-100">

                        {/* Testimonial Section */ }

                        <section
                                className="relative w-full px-4 py-20 flex justify-center items-center"
                                style={ {
                                        backgroundImage: 'url(/images/hero.avif)', // Ensure hero image path is correct
                                        backgroundSize: 'cover',
                                        minHeight: "72vh",
                                } }
                        >
                                <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl w-full">
                                        {/* Text Content */ }
                                        <div className="lg:w-2/3 text-left text-white">
                                                <h2 className="text-3xl font-bold mb-10">
                                                        Hear what our clients have to say about their experience with COMFNET Consulting.
                                                </h2>
                                                <blockquote className="text-xl italic leading-relaxed">
                                                        "ComfNet Solutions provided us with outstanding business consulting and expertly guided us on a 10-day trip to India for our research on fair trade and organic cotton. We highly recommend ComfNet Solutions for consulting and IT services if you're considering starting a business."
                                                </blockquote>
                                        </div>

                                        {/* Image and Name */ }
                                        <div className="lg:w-1/3 mt-8 lg:mt-0 flex flex-col items-end lg:items-center ">
                                                <img
                                                        src="images/case_studies1.png"
                                                        alt="Henning Tepe"
                                                        className="rounded-full w-32 h-32 object-cover mb-4"
                                                />
                                                <p className="mt-4 font-bold text-white text-lg">
                                                        - Henning Tepe, Co-Founder, Transparenseeds
                                                </p>
                                        </div>
                                </div>
                        </section>

                        <Companies />

                        <section className="bg-white py-16">
                                <div className="container mx-auto text-center">
                                        <h2 className="text-3xl font-bold mb-4 text-blue-800">Case Studies</h2>
                                        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                                                Explore how we've helped clients overcome challenges and achieve meaningful results through innovative solutions and collaboration.
                                        </p>

                                        {/* Case Study Section */ }
                                        <div className="flex flex-col  items-start gap-8">
                                                {/* Case Study 1 */ }
                                                <div className="text-left">
                                                        <h3 className="text-2xl font-bold text-black mb-4 w-[60vw]">
                                                                Connected Mobility Solutions: Revolutionizing Transportation with Smart, Integrated Technology.
                                                        </h3>


                                                </div>
                                                {/* Image for Case Study 1 */ }
                                                <div>
                                                        <Image
                                                                src="/images/case_studies2.png"
                                                                alt="Connected Mobility Solutions"
                                                                width={ 700 }
                                                                height={ 200 }
                                                                className="rounded-lg shadow-lg object-cover"
                                                        />
                                                </div>
                                                <div className='flex flex-row items-end'>
                                                        <p className="text-gray-600 mb-6 w-[45vw]">
                                                                Developing an advanced connected solution for a leading automotive manufacturer to improve customer experience.
                                                        </p>
                                                        <Button />

                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>
        );
};

export default CaseStudies;
