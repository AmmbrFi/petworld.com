import Link from 'next/link'
import React from 'react'

const Regular = props => {
  return (
    <section className="container">
      <h2>Regular Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-72">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Sapphire</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">20% on Entrance Fees</li>
                <li className="text-lg mt-2">Free shipping on Products</li>
              </ul>

              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 20% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 1,500</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-72">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Aquamarine</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">10% on Entrance Fees</li>
                <li className="text-lg mt-2">Free shipping on Products</li>
              </ul>

              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 10% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 500</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-72">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Garnet</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">5% on Entrance Fees</li>
              </ul>

              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 5% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 99</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Regular
