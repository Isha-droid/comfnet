'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import Companies from '../components/Companies'
export default function Hero ()
{
        const { scrollY }=useScroll();
        const y=useTransform( scrollY, [ 0, 500 ], [ 0, 150 ] );

        return (
                <div className='bg-white'>
                        <motion.div className="flex flex-col items-center justify-center relative bg-white text-white min-h-[82vh]">
                                {/* Background Video */ }
                                <video
                                        className="absolute inset-0 w-full h-full object-cover z-0"
                                        src="images/bg.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                />

                                <motion.div
                                        style={ { y } }
                                        className="relative w-screen px-6 md:px-24 py-20 max-w-screen-xl mx-auto"
                                        initial={ { opacity: 0 } }
                                        animate={ { opacity: 1 } }
                                        transition={ { duration: 1 } }
                                >
                                        <div className="relative z-10">
                                                {/* Heading */ }
                                                <motion.h1
                                                        initial={ { x: 100, opacity: 0 } }
                                                        animate={ { x: 0, opacity: 1 } }
                                                        transition={ { delay: 0.2, type: 'spring', stiffness: 100 } }
                                                        className="text-3xl md:text-4xl font-bold md:w-[62vw] text-left leading-snug"
                                                >
                                                        Foreign people and technology drive more than 90% of the most successful U.S. tech companies.
                                                </motion.h1>

                                                {/* Subtext */ }
                                                <motion.div
                                                        initial={ { x: -100, opacity: 0 } }
                                                        animate={ { x: 0, opacity: 1 } }
                                                        transition={ { delay: 0.4, type: 'spring', stiffness: 80 } }
                                                >
                                                        <p className="mt-4 text-lg">The secret?</p>
                                                        <motion.h1
                                                                initial={ { scale: 0.8, opacity: 0 } }
                                                                animate={ { scale: 1, opacity: 1 } }
                                                                transition={ { delay: 0.6, duration: 0.6 } }
                                                                className="font-bold text-2xl md:text-3xl my-4"
                                                        >
                                                                Someone made the connection.
                                                        </motion.h1>
                                                </motion.div>

                                                {/* CTA Section */ }
                                                <motion.div
                                                        className="flex flex-col md:flex-row items-center justify-between mt-20 gap-6"
                                                        initial={ { y: 50, opacity: 0 } }
                                                        animate={ { y: 0, opacity: 1 } }
                                                        transition={ { delay: 0.8, duration: 0.5 } }
                                                >
                                                        <Button
                                                                bgColor="bg-orange-500"
                                                                textColor="text-white"
                                                                route="/about"
                                                                text="Get your consultation - Free"
                                                        />
                                                        <motion.p
                                                                initial={ { opacity: 0, y: 20 } }
                                                                animate={ { opacity: 1, y: 0 } }
                                                                transition={ { delay: 1, duration: 0.6 } }
                                                                className="text-lg italic"
                                                        >
                                                                "Global Talent Fuels Innovation - Unveiling the Secret to Tech Success."
                                                        </motion.p>
                                                </motion.div>
                                        </div>

                                </motion.div>
                        </motion.div>
                        <Companies />
                </div>
        );
}
