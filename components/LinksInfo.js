import React from 'react'

const LinksInfo = props => {
  return (
    <div className="flex justify-center space-y-10 md:space-x-10 md:space-y-0 flex-col md:flex-row mx-10 md:mx-0">
      <a
        href="https://etherscan.io/address/0xAD7F825cba0Cf6F32e97166EC44aF10c7A6B1928"
        target="_blank"
        rel="noreferrer"
        className="rbox  patrn p-6 text-center text-xl font-bold cursor-pointer">
        Contract in Etherscan
      </a>
      <a
        href="https://opensea.io/collection/petpaws?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE"
        target="_blank"
        rel="noreferrer"
        className="rbox  patrn p-6 text-center text-xl font-bold cursor-pointer">
        Explore in Opensea
      </a>
    </div>
  )
}

export default LinksInfo
