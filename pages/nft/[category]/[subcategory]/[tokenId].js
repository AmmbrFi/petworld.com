import Footer from '../../../../components/Footer'
import Image from 'next/image'
import InnerMenu from '../../../../components/InnerMenu'
import { NextSeo } from 'next-seo'
import NftDetail from '../../../../components/Detail/NftDetail'
import React from 'react'

const NFTPage = ({ category, subcategory, tokenId }) => {
  return (
    <>
      <NextSeo title="NftDetail" />
      <main>
        <InnerMenu />
        <div className="container">
          <NftDetail {...{ category, subcategory, tokenId }} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  let { category, subcategory, tokenId } = ctx.query

  return { props: { category, subcategory, tokenId } }
}

export default NFTPage
