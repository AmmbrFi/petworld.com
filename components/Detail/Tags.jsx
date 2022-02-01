import React, { useState } from 'react'

import Link from 'next/link'

const Tags = props => {
  const [display, setDisplay] = useState(1)
  console.log('$$$', display)
  return (
    <div className="flex flex-row md:space-x-6 space-x-2">
      <div
        onClick={() => setDisplay(1)}
        className={` rounded-full md:px-10 md:py-2 px-3  cursor-pointer ${
          display === 1
            ? 'bg-[#F08A4B] text-white active'
            : 'bg-gray-200 text-black'
        }`}>
        All
      </div>
      <div
        onClick={() => setDisplay(2)}
        className={` rounded-full md:px-10 md:py-2 px-3  cursor-pointer ${
          display === 2
            ? 'bg-[#F08A4B] text-white active'
            : 'bg-gray-200 text-black'
        }`}>
        Cats
      </div>
      <div
        onClick={() => setDisplay(3)}
        className={`rounded-full md:px-10 md:py-2 px-3  cursor-pointer ${
          display === 3
            ? 'bg-[#F08A4B] text-white active'
            : 'bg-gray-200 text-black'
        }`}>
        Dogs
      </div>
      <div
        onClick={() => setDisplay(4)}
        className={`rounded-full md:px-10 md:py-2 px-3  cursor-pointer ${
          display === 4
            ? 'bg-[#F08A4B] text-white active'
            : 'bg-gray-200 text-black'
        }`}>
        Parrots
      </div>
    </div>
  )
}

export default Tags
