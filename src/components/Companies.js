import React from 'react'

const Companies=() =>
{
        return (
                <div
                        style={ {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5rem',
                                flexWrap: 'wrap',
                        } }
                >
                        { [
                                "Company logo 1.svg",
                                "Company logo 2.svg",
                                "Company logo 3.svg",
                                "Company logo 4.svg",
                                "Company logo 5.svg",
                        ].map( ( img, index ) => (
                                <img
                                        key={ index }
                                        src={ `/images/${ img }` } // Corrected file path
                                        alt={ `Logo ${ index+1 }` }
                                        style={ {
                                                margin: '10px',
                                                width: '130px',
                                                height: '100px',
                                                objectFit: 'contain',
                                        } }
                                />
                        ) ) }
                </div>
        )
}

export default Companies