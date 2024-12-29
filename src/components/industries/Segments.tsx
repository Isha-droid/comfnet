import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
import Quote from './Quote'
import FAQ from './FAQs'

const Segments : React.FC = () => {
  return (
    <div className='bg-white'>
        <LeftCard img='/fourdoto.png' 
        header='Industry 4.0' 
        content='We are on the verge of a technological revolution that will change the way we live, work and interact with each other. This emerging revolution will describe the networking of intelligence machines and processes in the industry with the help of information and communication technology' />
        <RightCard
        img='/telematics.png'
        content='Telematics is a technology that combines the areas of telecommunications and IT. Telematics links information from at least two information systems using a telecommunication system and special data processing'
        header='Telematics' />
        <LeftCard 
        img='/cybersec.png'
        header='Automotive Cybersecurity'
        content='As the automotive industry becomes more intelligent, cybersecurity protocols are required to protect systems from malicious attacks. Automotive cybersecurity secures communication networks, electronic systems, software, and collected data to prevent any harm.' />
        <RightCard 
        img='/ivi.png'
        header='IVI Systems'
        content='As the automotive industry becomes more intelligent, cybersecurity protocols are required to protect systems from malicious attacks. Automotive cybersecurity secures communication networks, electronic systems, software, and collected data to prevent any harm.' />
        <Quote />
        <FAQ />
    </div>
  )
}

export default Segments
