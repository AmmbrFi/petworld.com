import Footer from '../../components/Footer'
import Image from 'next/image'
import InnerMenu from '../../components/InnerMenu'
import { NextSeo } from 'next-seo'
import NftDetail from '../../components/Detail/NftDetail'
import React from 'react'
import Tags from '../../components/Detail/Tags'

const NFTPage = () => {
  return (
    <>
      <NextSeo title="NftDetail" />
      <main>
        <InnerMenu />

        <section className="container">
          <Tags />
          <NftDetail />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NFTPage
