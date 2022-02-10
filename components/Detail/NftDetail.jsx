import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Loading from '../Loading'
import Tags from './Tags'
import { nftList } from '../../actions'

const NFTDetail = ({ category, subcategory, tokenId }) => {
  const [list, setList] = React.useState('all')
  const [data, setData] = React.useState()
  const previous = data?.previousAsset ? data?.previousAsset : 'null'
  const next = data?.nextAsset ? data?.nextAsset : 'null'
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchList = async () => {
      try {
        let result = await nftList({
          subcategory: subcategory || 'all',
          category: category,
          tokenId: tokenId
        })

        setData(result?.data?.data ? result?.data?.data : '')
      } catch (error) {
        console.log(error)
      }
    }
    fetchList(category, subcategory, tokenId)
  }, [category, subcategory, tokenId])

  return (
    <div>
      <Tags {...{ subCat: subcategory, category, tokenId }} />
      <div className="px-4 my-12 text-black">
        {!isLoading ? (
          data?.message !== 'No assets found' ? (
            <div className="flex flex-row  items-center md:space-x-8 space-x-3">
              {data?.previousAsset === null ? (
                <button className="bg-orange opacity-50 rounded-full md:p-4 p-1 cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href="/nft/[category]/[subcategory]/[previous]"
                  as={`/nft/${category}/${subcategory}/${previous}`}>
                  <a className="bg-orange rounded-full md:p-4 p-1 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </a>
                </Link>
              )}

              <div className="bg-white md:p-8 p-2 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0">
                  <div>
                    <img
                      src={`/${category}.png`}
                      className="w-full rounded-lg"
                      alt="Animals"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold text-black">
                      {data?.asset?.name}
                    </h1>
                    <p className="text-base text-orange mb-5">
                      {category.toUpperCase()}
                    </p>

                    <p>{data?.asset?.description}</p>
                    <div className="flex flex-row items-center justify-between mt-10">
                      <div className="flex flex-col">
                        <p className="text-gray-400">Price</p>
                        <p className="text-orange text-2xl font-bold">
                          {data?.asset?.price}
                        </p>
                      </div>
                      <button className="bg-orange font-bold py-3 px-5 text-white rounded-lg">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {data?.nextAsset === null ? (
                <button className="bg-orange opacity-50 rounded-full md:p-4 p-1 cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href="/nft/[category]/[subcategory]/[next]"
                  as={`/nft/${category}/${subcategory}/${next}`}>
                  <a className="bg-orange rounded-full md:p-4 p-1 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </Link>
              )}
            </div>
          ) : (
            <p className="mb-64">No Assets found!</p>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default NFTDetail
