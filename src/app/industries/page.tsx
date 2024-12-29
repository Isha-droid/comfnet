import React from 'react'
import Companies from '../../components/industries/Companies'
import HeroSectionSlider from '../../components/industries/Hero'
import Segments from '../../components/industries/Segments'
import SegmentsHeader from '../../components/industries/SegmentsHeader'
import AutomotiveManufacturing from '../../components/industries/Hero'

const Industries : React.FC = () => {
  return (
    <div className='flex flex-col'>
      <AutomotiveManufacturing />
      <Companies />
      <SegmentsHeader />
      <Segments />
    </div>
  )
}

export default Industries
