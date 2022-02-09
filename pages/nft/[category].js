import Footer from '../../components/Footer'
import Image from 'next/image'
import InnerMenu from '../../components/InnerMenu'
import { NextSeo } from 'next-seo'
import NftDetail from '../../components/Detail/NftDetail'
import React from 'react'

const NFTPage = ({ category }) => {
  return (
    <>
      <NextSeo title="NftDetail" />
      <main>
        <InnerMenu />
        <div className="container">
          <NftDetail category={category} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  let { category } = ctx.query

  return { props: { category } }
}

export default NFTPage
