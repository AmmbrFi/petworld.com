import Footer from '../../components/Footer'
import Image from 'next/image'
import Masthead from '../../components/Detail/Masthead'
import Menu from '../../components/Menu'
import { NextSeo } from 'next-seo'
import NftDetail from '../../components/Detail/NftDetail'
import React from 'react'
const NFTPage = () => {
  return (
    <>
      <NextSeo title="NftDetail" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <section className="container my-20">
          <NftDetail />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NFTPage
