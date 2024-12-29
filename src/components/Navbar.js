'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import NavLinks from '../components/Navlinks';

// Navbar Component with Dropdown
const Navbar=() =>
{
        const [ isOpen, setIsOpen ]=useState( false );
        const [ scrolled, setScrolled ]=useState( false );

        useEffect( () =>
        {
                const handleScroll=() =>
                {
                        setScrolled( window.scrollY>50 );
                };
                window.addEventListener( 'scroll', handleScroll );
                return () => window.removeEventListener( 'scroll', handleScroll );
        }, [] );

        return (
                <nav className={ `fixed w-full z-50 transition-all duration-300 ${ scrolled? 'bg-blue-900 shadow-lg':'bg-transparent' }` }>
                        <div className="max-w-7xl mx-auto px-4">
                                <div className="flex justify-between items-center h-16">
                                        {/* Logo */ }
                                        <img src="images/logo.png" alt="Logo" className="h-8" />

                                        {/* Desktop Menu */ }
                                        <div className="hidden md:flex items-center space-x-8">
                                                <NavLinks />
                                                <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
                                                        Contact Us
                                                </button>
                                        </div>

                                        {/* Mobile Menu Button */ }
                                        <button
                                                onClick={ () => setIsOpen( !isOpen ) }
                                                className="md:hidden text-white"
                                        >
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        { isOpen? (
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
                                                        ):(
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
                                                        ) }
                                                </svg>
                                        </button>
                                </div>

                                {/* Mobile Menu */ }
                                <motion.div
                                        initial={ false }
                                        animate={ isOpen? { height: 'auto', opacity: 1 }:{ height: 0, opacity: 0 } }
                                        className="md:hidden overflow-hidden"
                                >
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                                <NavLinks mobile />
                                        </div>
                                </motion.div>
                        </div>
                </nav>
        );
};

export default Navbar;
