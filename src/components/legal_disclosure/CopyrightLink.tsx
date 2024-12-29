import React from 'react'

const CopyrightLink = () => {
  return (
    <div className="bg-white text-gray-800 p-12 rounded-lg shadow-md  mx-auto max-w-[70%] text-justify">
      <h2 className="text-2xl font-bold mb-4">Copyright</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          The content and works on these pages created by the site operators are subject to German copyright law. 
          <span className='font-semibold'> All rights reserved.</span>
        </li>
        <li>
          Duplication, processing, distribution, and any type of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.
        </li>
        <li className='font-semibold'>
          Any commercial use requires explicit prior consent.
        </li>
        <li>
          Insofar as the content on this page was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such.
        </li>
        <li>
          Should you nevertheless become aware of a copyright infringement, we ask you to notify us accordingly. <span className='font-semibold'> We will respond promptly to all infringement notifications</span>. If we become aware of any infringements, we will remove such content immediately.
        </li>
      </ul>
    </div>
  )
}

export default CopyrightLink
