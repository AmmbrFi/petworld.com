import NftCard from './NftCard'
import React from 'react'

const NftList = () => {
  return (
    <div className="container px-4 my-20">
      <p className="text-xl font-semibold text-black mb-5"> Items</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <NftCard {...{ path: '/Burung.png', name: 'Burung' }} />
        <NftCard {...{ path: '/Ikan.png', name: 'Ikan' }} />
        <NftCard {...{ path: '/Kucing.png', name: 'Kucing' }} />
      </div>
    </div>
  )
}

export default NftList
