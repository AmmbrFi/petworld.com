import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Marketplace/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import React from 'react'

const Marketplace = () => {
  return (
    <>
      <NextSeo title="Nft Store" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <section className="container my-20">
          <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center mt-6 gap-8">
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/500/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Diamond
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/490/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Ruby
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/480/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Emerald
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/510/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Paraiba
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/495/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Sapphire
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/490/500/animals`}
                  className="w-full rounded-lg opacity-80 "
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Aquamarine
              </p>
            </div>
            <div className="rbox patrn p-5 rounded-lg">
              <a href={`/list/${new Date().getMilliseconds()}`}>
                <img
                  src={`https://placeimg.com/485/500/animals`}
                  className="w-full rounded-lg opacity-80"
                  alt=""
                />
              </a>
              <p className="my-4 font-bold text-2xl text-gray-100 pl-2 uppercase">
                Garnet
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Marketplace
