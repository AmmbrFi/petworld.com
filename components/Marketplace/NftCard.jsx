import React from 'react'

const NftCard = () => {
  return (
    <div className="rbox patrn p-3 rounded">
      <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
        <a href={`/nft/${new Date().getMilliseconds()}`}>
          <img
            src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
            className="w-full"
            alt=""
          />
        </a>
      </div>

      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <p className="my-4 font-medium text-lg text-gray-100">Name</p>
      </a>

      <div className="flex justify-between items-center my-2">
        <div className="font-bold text-lg">Price</div>
      </div>
    </div>
  )
}

export default NftCard
