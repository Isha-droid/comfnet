import React from 'react'

const Stats = () => {
  return (
    <div className='bg-blue-900 text-white flex gap-4 justify-evenly p-6'>
      <div className='flex gap-2 p-6'>
        <h1 className='text-6xl font-bold'>5+</h1>
        <span className='p-3 text-3xl font-semibold'>Countries Worldwide</span>
      </div>

      <div className='flex gap-2 p-6'>
        <h1 className='text-6xl font-bold'>110+</h1>
        <span className='p-3 text-3xl font-semibold'>Happy Customers</span>
      </div>
    </div>
  )
}

export default Stats
