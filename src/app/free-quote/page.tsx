import React from 'react'
import Hero from '../../components/freequote/Hero'
import FixedFooter from '../../components/freequote/FixedFooter'
import ContactOne from '../../components/freequote/ContactOne'
import Card from '../../components/freequote/Card'
import FAQSection from '../../components/freequote/QuerySolution'
import { Section } from 'lucide-react'
import CompanySections from '../../components/freequote/Section'

const Free = () => {
    return (
        <div className='bg-white'>
            <Hero />
            <FixedFooter />
            <ContactOne />
            <div className='flex justify-center gap-6'>
                <Card logo='/ellipse.png'
                    title='Head Office'
                    description='Kuhnkestraße 6, 24118 Kiel, Germany' />

                <Card logo='/ellipse.png'
                    title='Our Phone'
                    description='+49 40 30744921' />

                <Card logo='/ellipse.png'
                    title='Our Email'
                    description='confnetsolution@co.gr' />
            </div>
            <FAQSection />
            <CompanySections />
        </div>
    )
}

export default Free
