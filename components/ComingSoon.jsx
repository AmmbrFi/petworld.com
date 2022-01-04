import React from 'react'

const ComingSoon = props => {
  return (
    <div
      className="bg-cover h-screen w-screen fixed left-0 top-0 bg-gray-900 overflow-hidden pointer-events-none bg-img"
      style={{ backgroundImage: 'url(/mast-1.svg)' }}>
      <div className="flex flex-col items-center justify-center h-full z-30">
        <h1 className="font-serif text-6xl mb-2 drop-shadow-2xl">
          Global Pets World
        </h1>
        <h2 className="drop-shadow-2xl text-gray-300">Coming Soon...</h2>
      </div>
    </div>
  )
}

export default ComingSoon
