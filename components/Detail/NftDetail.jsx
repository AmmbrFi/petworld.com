import React, { useEffect, useState } from 'react'

import Loading from '../Loading'
import Tags from './Tags'
import { nftList } from '../../actions'
import BuyForm from './BuyForm'
import { PreviousButton, NextButton } from './NavButton'
import { formatEther } from '@ethersproject/units'

const NFTDetail = ({ category, subcategory, tokenId }) => {
  const [list, setList] = React.useState('all')
  const [data, setData] = React.useState(null)
  const previous = data?.previousAsset ? data?.previousAsset : 'null'
  const next = data?.nextAsset ? data?.nextAsset : 'null'
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true)
      try {
        let result = await nftList({
          subcategory: subcategory || 'all',
          category: category,
          tokenId: tokenId
        })

        const res = result?.data?.data.hasOwnProperty('asset')
          ? result?.data?.data
          : null

        setData(res)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchList(category, subcategory, tokenId)
  }, [category, subcategory, tokenId])

  return (
    <div>
      <Tags {...{ subCat: subcategory, category, tokenId }} />
      <div className="px-4 my-12 text-black">
        {isLoading && <Loading />}

        {!isLoading && data === null && (
          <p className="mb-64">No Assets found!</p>
        )}

        {!isLoading && data !== null && (
          <div className="flex flex-row  items-center md:space-x-8 space-x-3">
            <PreviousButton
              {...{ asset: data?.previousAsset, subcategory, category }}
            />

            <div className="bg-white md:py-16 md:px-10 p-2 rounded-lg w-10/12">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0">
                <div>
                  <img
                    src={
                      data?.asset?.assets[0]?.path.includes(
                        'gateway.pinata.cloud'
                      )
                        ? data?.asset?.assets[0]?.path.replace(
                            'gateway.pinata.cloud',
                            'ipfs.io'
                          )
                        : data?.asset?.assets[0]?.path
                    }
                    className="w-full rounded-lg"
                    alt="Animals"
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-semibold text-black capitalize">
                    {data?.asset?.name}
                  </h1>
                  <p className="text-base text-orange mb-5">
                    {data?.asset?.category}
                  </p>

                  <p>{data?.asset?.description}</p>
                  <div className="mt-10">
                    <p className="text-gray-600">Price</p>
                    <p className="text-orange text-2xl font-bold">
                      {formatEther(data?.asset?.price)}
                      <span className="text-gray-600 ml-2">ETH</span>
                    </p>
                  </div>
                  <div className="mt-10">
                    <BuyForm {...{ asset: data.asset }} />
                  </div>
                </div>
              </div>
            </div>

            <NextButton
              {...{ asset: data?.nextAsset, subcategory, category }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default NFTDetail
