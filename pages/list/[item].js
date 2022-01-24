import Footer from '../../components/Footer'
import Image from 'next/image'
import Masthead from '../../components/Detail/Masthead'
import Menu from '../../components/Menu'
import { NextSeo } from 'next-seo'
import NftList from '../../components/Marketplace/NftList'
import React from 'react'

const ListPage = () => {
  return (
    <>
      <NextSeo title="NftList" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <section className="container my-20">
          <NftList />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ListPage
