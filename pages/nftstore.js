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
          <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center mt-6 gap-24">
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Diamond
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Ruby
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Emerald
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Paraiba
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Sapphire
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
                Aquamarine
              </p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md rbox patrn">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100 pl-2">
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
