import React from 'react'

const NftCard = ({ path, name }) => {
  return (
    <div className="bg-white p-2 rounded">
      <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
        <a href={`/nft/${new Date().getMilliseconds()}`}>
          <img src={path} className="w-full" alt="" />
        </a>
      </div>

      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <p className="my-2 font-medium text-lg text-orange">{name}</p>
      </a>

      <div className="flex justify-between items-center">
        <div className="font-bold text-lg text-orange">99,000</div>
      </div>
    </div>
  )
}

export default NftCard
