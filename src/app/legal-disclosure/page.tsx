import React from 'react'
import LegalDisclosureComponent from '../../components/legal_disclosure/LegalDisclosure'
import CompanyPurposeComponent from '../../components/legal_disclosure/CompanyPurpose'
import Solutions from '../../components/legal_disclosure/Solutions'
import Security from '../../components/legal_disclosure/Security'
import LiabilityForLinks from '../../components/legal_disclosure/Links'

const LegalDisclosure: React.FC = () => {
        return (
                <div className='bg-white'>
                        <LegalDisclosureComponent />
                        <CompanyPurposeComponent />
                        <h1
                                className='text-blue-700 font-bold p-4 text-center text-4xl'
                        >Comfnet Solutions GmBH</h1>
                        <Solutions />
                        <Security />
                        <LiabilityForLinks />
                </div>
        )
}

export default LegalDisclosure
