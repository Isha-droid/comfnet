'use client'
import { useState } from 'react';
import styles from './styles.module.css';

const Accordion=( { title, content } ) =>
{
        const [ isOpen, setIsOpen ]=useState( false );

        return (
                <div className={ styles.accordion }>
                        <button onClick={ () => setIsOpen( !isOpen ) }>{ title }</button>
                        { isOpen&&<p>{ content }</p> }
                </div>
        );
};

export default Accordion;
