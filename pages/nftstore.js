import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Marketplace/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Opening from '../components/Opening'
import { nftCategory } from '../actions'

const Marketplace = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchList = async () => {
      try {
        let result = await nftCategory()

        setCategories(result.data.data.list ? result.data.data.list : [])
      } catch (err) {
        console.log(err)
      }
    }
    fetchList()
  }, [])

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
            {categories && categories.length > 0 ? (
              categories.map((obj, i) => {
                return (
                  <div className="bg-white p-5 rounded-lg" key={i}>
                    <a href={`/nft/${obj}`}>
                      <img
                        src="/Anjing.png"
                        className="w-full rounded-lg opacity-80"
                        alt=""
                      />
                    </a>
                    <p className="my-4 font-bold md:text-2xl text-sm text-orange pl-2 uppercase">
                      {obj}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="text-xl text-gray-700 h-72">
                <p>Nothing to list</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Marketplace
