import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Marketplace/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Opening from '../components/Opening'
import React from 'react'

{
  /*<div
  className="bg-cover bg-center h-[460px] bg-gray-600"
  style={{ backgroundImage: 'url(/c-bg.png)' }}>
  <Menu />
  <Masthead />
</div>
<section className="container my-20">
  <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center mt-6 gap-8">
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src="/Anjing.png"
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Diamond
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/490/500/animals`}
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Ruby
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/480/500/animals`}
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Emerald
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/510/500/animals`}
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Paraiba
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/495/500/animals`}
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Sapphire
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/490/500/animals`}
          className="w-full rounded-lg opacity-80 "
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Aquamarine
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg">
      <a href={`/nft/${new Date().getMilliseconds()}`}>
        <img
          src={`https://placeimg.com/485/500/animals`}
          className="w-full rounded-lg opacity-80"
          alt=""
        />
      </a>
      <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
        Garnet
      </p>
    </div>
  </div>
</section>
<Footer />*/
}

const Marketplace = () => {
  return (
    <>
      <NextSeo title="Nft Store" />

      <main>
        <Opening />
      </main>
    </>
  )
}

export default Marketplace
