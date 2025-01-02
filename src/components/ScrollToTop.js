'use client'
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';


const ScrollToTop=() =>
{
        const [ visible, setVisible ]=useState( false );

        useEffect( () =>
        {
                const handleScroll=() =>
                {
                        setVisible( window.pageYOffset>300 );
                };
                window.addEventListener( 'scroll', handleScroll );
                return () => window.removeEventListener( 'scroll', handleScroll );
        }, [] );

        return (
                <motion.button
                        initial={ { opacity: 0 } }
                        animate={ { opacity: visible? 1:0 } }
                        onClick={ () => window.scrollTo( { top: 0, behavior: 'smooth' } ) }
                        className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                </motion.button>
        );
};
export default ScrollToTop;