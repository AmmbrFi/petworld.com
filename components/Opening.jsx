import Link from 'next/link'
import React from 'react'

const Opening = props => {
  return (
    <div
      className="bg-cover h-screen w-screen fixed left-0 top-0 bg-gray-900 overflow-hidden"
      style={{ backgroundImage: 'url(/mast-1.svg)' }}>
      <div className="flex flex-col items-center justify-center h-full z-20">
        <h2 className="drop-shadow-2xl text-5xl text-white">
          {`Opening Valentine's Day 14 February 2022`}
        </h2>
        <Link href="/">
          <a className="btn mt-6">Back to Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Opening
