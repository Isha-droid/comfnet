'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Button=( {
        bgColor='bg-blue-700',  // Default background color
        textColor='text-white', // Default text color
        route='/',              // Default route
        text='View more',  // Default button text
        border="yes"
} ) =>
{
        const router=useRouter();

        const handleNavigate=() =>
        {
                router.push( route );
        };

        return (
                <motion.button
                        onClick={ handleNavigate }
                        className={ `flex items-center gap-2 px-4 py-2 ${ bgColor } ${ textColor } rounded-full ${ border=='no'? '':'border-2' }  hover:scale-105 transition-transform my-4` }
                        whileHover={ { scale: 1.1 } }
                        whileTap={ { scale: 0.9 } }
                >
                        <span
                                className={ `flex items-center justify-center w-6 h-6 bg-white ${ bgColor.replace(
                                        'bg-',
                                        'text-'
                                ) } rounded-full` }
                        >
                                →
                        </span>
                        <span>{ text }</span>
                </motion.button>
        );
};

export default Button;
