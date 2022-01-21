import NftCard from './NftCard'
import React from 'react'

const NftList = () => {
  return (
    <div className="container px-4 my-20">
      <p className="text-xl font-semibold text-black mb-5"> Items</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <NftCard {...{ path: `https://placeimg.com/305/300/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/300/300/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/295/305/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/290/305/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/285/305/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/280/305/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/310/305/animals` }} />
        <NftCard {...{ path: `https://placeimg.com/315/305/animals` }} />
      </div>
    </div>
  )
}

export default NftList
