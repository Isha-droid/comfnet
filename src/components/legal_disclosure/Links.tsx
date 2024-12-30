"use client"
import React, { useState } from 'react'
import LiabilityForLinks from './LiabilityLink'
import CopyrightLink from './CopyrightLink'
import DataProtection from './DataProtection'

const Links: React.FC = () => {


  const [choice, setChoice] = useState<number>(1)

  return (
    <div className='bg-white flex gap-4 mx-auto text-black'>
      <div className='flex flex-col text-xl p-6 min-w-[30%]'>
        <div className="pl-4 space-y-8">
          <h1
            className={`cursor-pointer font-semibold text-lg hover:text-blue-700 ${choice === 1 ? "text-blue-700 border-l-4 border-blue-500 pl-2" : "text-black"
              }`}
            onClick={() => setChoice(1)}
          >
            Liability for Links
          </h1>
          <h1
            className={`cursor-pointer font-semibold text-lg hover:text-blue-700 ${choice === 2 ? "text-blue-700 border-l-4 border-blue-500 pl-2" : "text-black"
              }`}
            onClick={() => setChoice(2)}
          >
            Copyright
          </h1>
          <h1
            className={`cursor-pointer font-semibold text-lg hover:text-blue-700 ${choice === 3 ? "text-blue-700 border-l-4 border-blue-500 pl-2" : "text-black"
              }`}
            onClick={() => setChoice(3)}
          >
            Data Protection and Alternative Dispute Resolution
          </h1>
        </div>
      </div>

      {choice === 1 && <LiabilityForLinks />}
      {choice === 2 && <CopyrightLink />}
      {choice === 3 && <DataProtection />}

    </div>
  )
}

export default Links
