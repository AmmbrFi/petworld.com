import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Marketplace/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import React from 'react'

const Marketplace = () => {
  return (
    <>
      <NextSeo title="Marketplace" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <section className="container my-20">
          <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center mt-6  gap-5">
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100">Cat</p>
              <p>Price: 10,000</p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100">Dog</p>
              <p>Price: 2000</p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100">Rabbit</p>
              <p>Price: 1000</p>
            </div>
            <div className="rbox patrn p-3 rounded">
              <div className="h-300 flex justify-center items-center overflow-hidden rounded-md bg-gray-700">
                <a href={`/list/${new Date().getMilliseconds()}`}>
                  <img
                    src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
                    className="w-full"
                    alt=""
                  />
                </a>
              </div>
              <p className="my-4 font-medium text-lg text-gray-100">Parrot</p>
              <p>Price: 1000</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Marketplace
