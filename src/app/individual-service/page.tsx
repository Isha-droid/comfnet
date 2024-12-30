import React from 'react'
import TechnologyTransfer from '../../components/individual-service/Hero'
import Companies from '../../components/industries/Companies'
import Header from '../../components/individual-service/Header'
import ServiceFeatures from '../../components/individual-service/CardSection'
import Stats from '../../components/individual-service/Stats'
import Chart from '../../components/individual-service/Chart'
import FAQ from '../../components/individual-service/Questions'

const IndividualService = () => {
  return (
    <div className='bg-white'>
      <TechnologyTransfer />
      <Companies />
      <Header />
      <ServiceFeatures />
      <Stats />
      <Chart />
      <FAQ />
    </div>
  )
}

export default IndividualService
