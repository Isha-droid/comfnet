'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';


const NavLinks=( { mobile } ) =>
{
        const [ activeDropdown, setActiveDropdown ]=useState( null );

        const links=[
                {
                        name: 'Services',
                        dropdown: [ 'Consulting', 'Technology', 'Staffing', 'Training' ]
                },
                {
                        name: 'Industries',
                        dropdown: [ 'Automotive', 'FinTech', 'Healthcare', 'Energy' ]
                },
                { name: 'About' },
                { name: 'Contact' }
        ];

        return links.map( ( link ) => (
                <div key={ link.name } className={ `relative ${ mobile? 'block':'inline-block' }` }>
                        <button
                                onClick={ () => setActiveDropdown( activeDropdown===link.name? null:link.name ) }
                                className="text-white hover:text-yellow-500 transition-colors px-3 py-2"
                        >
                                { link.name }
                                { link.dropdown&&(
                                        <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 9l-7 7-7-7" />
                                        </svg>
                                ) }
                        </button>

                        { link.dropdown&&activeDropdown===link.name&&(
                                <motion.div
                                        initial={ { opacity: 0, y: -10 } }
                                        animate={ { opacity: 1, y: 0 } }
                                        exit={ { opacity: 0, y: -10 } }
                                        className={ `${ mobile? 'relative':'absolute' } z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5` }
                                >
                                        <div className="py-1">
                                                { link.dropdown.map( ( item ) => (
                                                        <a
                                                                key={ item }
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                                { item }
                                                        </a>
                                                ) ) }
                                        </div>
                                </motion.div>
                        ) }
                </div>
        ) );
};

export default NavLinks;