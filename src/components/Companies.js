'use client';
import React, { useEffect, useRef } from 'react';

const Companies=() =>
{
        const scrollRef=useRef( null );

        useEffect( () =>
        {
                const scrollContainer=scrollRef.current;

                if ( !scrollContainer ) return;

                const cloneWidth=scrollContainer.scrollWidth; // Get the total width of the scroll container
                let scrollSpeed=1; // Speed of scrolling
                let animationFrame;

                const startScrolling=() =>
                {
                        // Increment the scroll position
                        scrollContainer.scrollLeft+=scrollSpeed;

                        // If the user scrolls to the cloned section, reset to the original without causing a glitch
                        if ( scrollContainer.scrollLeft>=cloneWidth/2 )
                        {
                                scrollContainer.scrollLeft=0;
                        }

                        animationFrame=requestAnimationFrame( startScrolling ); // Continuously call the function
                };

                startScrolling(); // Start the scrolling animation

                return () => cancelAnimationFrame( animationFrame ); // Clean up on component unmount
        }, [] );

        return (
                <div
                        ref={ scrollRef }
                        style={ {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5rem',
                                flexWrap: 'nowrap',
                                overflowX: 'hidden', // Hide the scrollbar for a cleaner look
                                whiteSpace: 'nowrap', // Prevent wrapping
                                padding: '10px',
                                position: 'relative',
                        } }
                >
                        { [
                                'Company logo 1.svg',
                                'Company logo 2.svg',
                                'Company logo 3.svg',
                                'Company logo 4.svg',
                                'Company logo 5.svg',
                        ]
                                .concat(
                                        // Duplicate the logos to create the smooth loop
                                        [ 'Company logo 1.svg', 'Company logo 2.svg', 'Company logo 3.svg', 'Company logo 4.svg', 'Company logo 5.svg' ]
                                )
                                .map( ( img, index ) => (
                                        <img
                                                key={ index }
                                                src={ `/images/${ img }` }
                                                alt={ `Logo ${ index+1 }` }
                                                style={ {
                                                        margin: '10px',
                                                        width: '130px',
                                                        height: '100px',
                                                        objectFit: 'contain',
                                                        flexShrink: 0,
                                                } }
                                        />
                                ) ) }
                </div>
        );
};

export default Companies;
