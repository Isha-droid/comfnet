'use client';

import Image from 'next/image';
import Companies from "../../components/Companies"
import Button from "../../components/Button"
import { motion } from "framer-motion";
import { caseStudies } from '../constants';
const CaseStudies=() =>
{
        return (
                <div className="  bg-gray-100">

                        {/* Testimonial Section */ }

                        <section
                                className="min-h-screen relative w-full px-4 py-20 flex justify-center items-center"
                                style={ {
                                        backgroundImage: 'url(/images/hero.avif)', // Ensure hero image path is correct
                                        backgroundSize: 'cover',
                                        maxHeight: "82vh",
                                } }
                        >
                                <div className="max-w-[calc(100%-280px)] grid grid-cols-12 gap-x-14 gap-y-8 w-full">
                                        <h2 className="col-span-12 text-3xl font-bold h-auto">
                                                Hear what our clients have to say about their experience with COMFNET Consulting.
                                        </h2>

                                        {/* Image and Name */ }
                                        <div className="col-span-3  flex flex-col items-end lg:items-center ">
                                                <img
                                                        src="images/case_studies1.png"
                                                        alt="Henning Tepe"
                                                        className="rounded-xl w-full h-full object-cover mb-4"
                                                />
                                                <p className="mt-4 text-white text-lg">
                                                        <blockquote className='font-bold'>- Henning Tepe</blockquote> Co-Founder, Transparenseeds
                                                </p>
                                        </div>


                                        {/* Text Content */ }
                                        <div className="col-span-9 flex flex-col justify-center  text-left text-white">

                                                <blockquote className="text-xl italic leading-relaxed">
                                                        "ComfNet Solutions provided us with outstanding business consulting and expertly guided us on a 10-day trip to India for our research on fair trade and organic cotton. We highly recommend ComfNet Solutions for consulting and IT services if you're considering starting a business."
                                                </blockquote>
                                        </div>


                                </div>
                        </section>

                        <Companies />

                        <section className="bg-white py-16">
                                <div className="max-w-[calc(100%-280px)] container mx-auto">
                                        {/* Heading Section */ }
                                        <motion.div
                                                className="text-center grid grid-cols-12 gap-y-4"
                                                initial={ { opacity: 0, y: 30 } }
                                                animate={ { opacity: 1, y: 0 } }
                                                transition={ { duration: 0.6, ease: "easeOut" } }
                                        >
                                                <motion.h2
                                                        className="col-span-12 text-3xl font-bold text-blue-700"
                                                        initial={ { opacity: 0, y: -20 } }
                                                        animate={ { opacity: 1, y: 0 } }
                                                        transition={ { duration: 0.6, ease: "easeOut", delay: 0.2 } }
                                                >
                                                        Case Studies
                                                </motion.h2>
                                                <motion.p
                                                        className="col-span-12 text-gray-600 max-w-3xl mx-auto"
                                                        initial={ { opacity: 0, y: 20 } }
                                                        animate={ { opacity: 1, y: 0 } }
                                                        transition={ { duration: 0.6, ease: "easeOut", delay: 0.4 } }
                                                >
                                                        Explore how we've helped clients overcome challenges and achieve
                                                        meaningful results through innovative solutions and collaboration.
                                                </motion.p>
                                        </motion.div>

                                        {/* Case Studies Section */ }
                                        <div className="grid grid-cols-12 gap-y-12 mt-10">
                                                { caseStudies.map( ( study, index ) => (
                                                        <div key={ study.id } className="col-span-12">
                                                                {/* Title */ }
                                                                <motion.div
                                                                        className="col-span-8"
                                                                        initial={ { opacity: 0, x: -50 } }
                                                                        animate={ { opacity: 1, x: 0 } }
                                                                        transition={ {
                                                                                duration: 0.6,
                                                                                ease: "easeOut",
                                                                                delay: 0.6+index*0.2,
                                                                        } }
                                                                >
                                                                        <h3 className="col-span-7 text-2xl font-bold text-black mb-4">
                                                                                { study.title }
                                                                        </h3>
                                                                </motion.div>

                                                                {/* Image */ }
                                                                <motion.div
                                                                        className="col-span-12 relative"
                                                                        initial={ { scale: 0.9, opacity: 0 } }
                                                                        animate={ { scale: 1, opacity: 1 } }
                                                                        transition={ {
                                                                                duration: 0.8,
                                                                                ease: "easeOut",
                                                                                delay: 0.8+index*0.2,
                                                                        } }
                                                                >
                                                                        <Image
                                                                                src={ study.imageUrl }
                                                                                alt={ study.title }
                                                                                layout="responsive"
                                                                                width={ 1600 }
                                                                                height={ 600 }
                                                                                className="col-span-12 rounded-lg object-cover w-full"
                                                                        />
                                                                </motion.div>

                                                                {/* Description and Button */ }
                                                                <motion.div
                                                                        className="col-span-12 flex flex-row justify-between w-full"
                                                                        initial={ { opacity: 0, x: 50 } }
                                                                        animate={ { opacity: 1, x: 0 } }
                                                                        transition={ {
                                                                                duration: 0.6,
                                                                                ease: "easeOut",
                                                                                delay: 1+index*0.2,
                                                                        } }
                                                                >
                                                                        <p className="col-span-6 text-gray-600 mb-6 w-[75%] hover:text-gray-800 transition-colors duration-300">
                                                                                { study.description }
                                                                        </p>
                                                                        <Button route={ study.buttonRoute } />
                                                                </motion.div>
                                                        </div>
                                                ) ) }
                                        </div>
                                </div>
                        </section>                </div>
        );
};

export default CaseStudies;
