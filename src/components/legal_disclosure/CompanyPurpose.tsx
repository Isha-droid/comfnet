import React from 'react'

const CompanyPurpose = () => {
  return (
    <div className='flex justify-center gap-6 bg-white p-10'>
      <div className='rounded-md flex flex-col gap-2 border border-gray-300 p-6 max-w-[35%]'>
            <h1 className='text-blue-700 font-medium'>Company Registration Details</h1>
            <p className='text-black'>Registration number, managing director(s), and company address</p>
      </div>
      <div className='rounded-md flex flex-col gap-2 border border-gray-300 p-6 max-w-[35%]'>
            <h1 className='text-blue-700 font-medium'>Purpose and Usage</h1>
            <p className='text-black'>Physical address, email, and phone number for official corresspondence.</p>
      </div>
    </div>
  )
}

export default CompanyPurpose
 