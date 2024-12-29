'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const ServicesSection=( { title, description, tags=[], image, reverse=false, route="/" } ) =>
{
        // Animation variants
        const containerVariants={
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        };

        const textVariants={
                hidden: { opacity: 0, x: reverse? 50:-50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        };

        const imageVariants={
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
                hover: { scale: 1.05, transition: { duration: 0.3 } },
        };

        const tagVariants={
                hidden: { opacity: 0, y: 20 },
                visible: ( index ) => ( {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: index*0.1 },
                } ),
        };

        return (
                <motion.div
                        className="grid grid-cols-12 gap-[32px] py-12 max-w-[calc(100%-280px)] mx-auto items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                        variants={ containerVariants }
                >
                        {/* Text Container */ }
                        <motion.div
                                className={ `col-span-12 md:col-span-6 px-[16px] ${ reverse? "md:order-last":"" }` }
                                variants={ textVariants }
                        >
                                <motion.h2
                                        className="text-[32px] font-bold text-blue-600"
                                        initial={ { opacity: 0, x: reverse? -30:30 } }
                                        animate={ { opacity: 1, x: 0 } }
                                        transition={ { duration: 0.7 } }
                                >
                                        { title }
                                </motion.h2>
                                <motion.p
                                        className="mt-4 text-gray-700"
                                        initial={ { opacity: 0 } }
                                        animate={ { opacity: 1 } }
                                        transition={ { duration: 0.8, delay: 0.2 } }
                                >
                                        { description }
                                </motion.p>
                                <motion.div className="mt-4 flex flex-wrap gap-2">
                                        { tags.map( ( tag, index ) => (
                                                <motion.span
                                                        key={ tag }
                                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border  border-slate-700"
                                                        custom={ index }
                                                        variants={ tagVariants }
                                                >
                                                        { tag }
                                                </motion.span>
                                        ) ) }
                                </motion.div>
                                <Button route={ route } />
                        </motion.div>

                        {/* Image Container */ }
                        <motion.div
                                className="col-span-12 md:col-span-6 px-[16px]"
                                variants={ imageVariants }
                                whileHover="hover"
                        >
                                <div className="relative w-full h-64 md:h-96">
                                        <Image
                                                src={ `/images/${ image }` }
                                                alt={ title||'Service image' }
                                                fill
                                                className="rounded-2xl shadow-md object-cover"
                                                style={ { transform: 'translate3d(0, 0, 0)' } }
                                        />
                                </div>
                        </motion.div>
                </motion.div>
        );
};

export default ServicesSection;
