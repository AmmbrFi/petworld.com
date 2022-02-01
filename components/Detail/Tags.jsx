import Link from 'next/link'
import React from 'react'

const Tags = props => {
  return (
    <div className="flex flex-row md:space-x-6 space-x-2">
      <div className="bg-orange rounded-full md:px-10 md:py-2 px-3">All</div>
      <div className="bg-gray-200 rounded-full md:px-10 md:py-2 px-3 text-black">
        Cats
      </div>
      <div className="bg-gray-200 rounded-full md:px-10 md:py-2 px-3 text-black">
        Dogs
      </div>
      <div className="bg-gray-200 rounded-full md:px-10 md:py-2 px-3 text-black">
        Parrots
      </div>
    </div>
  )
}

export default Tags
