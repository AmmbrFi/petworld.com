import Link from 'next/link'
import React from 'react'

const Premium = props => {
  return (
    <section className="container">
      <h2>Premium Lifetime Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-96">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Diamond</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">80% on Entrance Fees</li>
                <li className="text-lg mt-2">25% on Products</li>
              </ul>
              <p className="mt-2 px-4 text-center">
                Access all events with full access behind the scenes
              </p>
              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 80% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 99,000</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-96">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Ruby</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">60% on Entrance Fees</li>
                <li className="text-lg mt-2">20% on Products</li>
              </ul>
              <p className="mt-2 px-4 text-center">
                Access all events with partial access behind the scenes
              </p>
              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 60% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 45,000</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-96">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Emerald</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">40% on Entrance Fees</li>
                <li className="text-lg mt-2">15% on Products</li>
              </ul>
              <p className="mt-2 px-4 text-center">
                Access 5 events per year with access behind the scenes on
                invitation
              </p>
              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 40% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 20,000</p>
            </div>
          </div>
          <Link href="/nftstore">
            <a className="rbox w-3/4  patrn p-6 text-center text-xl mt-6 font-bold cursor-pointer">
              <p className="cursor-pointer">BUY NFT NOW</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rbox patrn h-96">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-xl mt-3 font-bold">Paraiba</p>
              <p className="text-lg mt-2 font-bold">
                <u>Benefits % Discounts</u>
              </p>
              <ul className="list-disc">
                <li className="text-lg mt-2">30% on Entrance Fees</li>
                <li className="text-lg mt-2">5% on Products</li>
              </ul>
              <p className="mt-2 px-4 text-center">Access 3 events per year</p>
              <p className="mt-3 px-4 text-center">
                Upcoming Token Sale 30% Discount on Tokens
              </p>
              <p className="mt-3 px-4 text-center"> US$ 7,500</p>
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

export default Premium
