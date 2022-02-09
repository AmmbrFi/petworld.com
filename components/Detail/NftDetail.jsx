import { ActionKind, usePony } from 'pony-props'
import React, { useEffect, useState } from 'react'

import Tags from './Tags'
import { nftList } from '../../actions'

const NFTDetail = ({ category }) => {
  const [list, setList] = React.useState('all')
  const [data, setData] = React.useState([])

  const items = ['Cat', 'Dog', 'Parrot', 'Rabbit']
  //const items = data.keys()
  console.log('items', items)

  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state
  } = usePony({ numItems: items.length })

  useEffect(() => {
    const fetchList = async list => {
      try {
        let result = await nftList({
          subcategory: list || 'all'
        })
        setData(result.data.data.list ? result.data.data.list : [])
      } catch (error) {
        console.log(error)
      }
    }
    fetchList(list)
  }, [list])
  console.log('lists', data)
  return (
    <div>
      <Tags {...{ setList, list, category }} />
      <div className="px-4 my-12 text-black">
        <div
          className="flex flex-row  items-center md:space-x-8 space-x-3"
          {...getSectionProps()}>
          <h1 className="hidden" {...getHeadingProps()}></h1>
          <button
            {...getButtonProps(ActionKind.Previous)}
            className="bg-orange rounded-full md:p-4 p-1 cursor-pointer">
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

          <div
            className="bg-white md:p-8 p-2 rounded-lg"
            {...getCarouselWrapperProps()}>
            <ul {...getCarouselProps()}>
              {items.map((item, idx) => {
                console.log('idx', idx)
                return (
                  <li
                    key={idx}
                    {...getCarouselItemProps(idx)}
                    className="rounded overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0">
                      <div>
                        <img
                          src={`/Anjing.png`}
                          className="w-full rounded-lg"
                          alt="Animals"
                        />
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold text-black">
                          Anjing
                        </h1>
                        <p className="text-base text-orange mb-5">Diamond</p>

                        <p>
                          {`Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. At room temperature and pressure, another solid form of carbon known as graphite is the chemically stable form of carbon, but diamond converts to it extremely slowly. Diamond has the highest hardness and thermal conductivity of any natural material, properties that are used in major industrial applications such as cutting and polishing tools.`}
                        </p>
                        <div className="flex flex-row items-center justify-between mt-10">
                          <div className="flex flex-col">
                            <p className="text-gray-400">Price</p>
                            <p className="text-orange text-2xl font-bold">
                              99,000
                            </p>
                          </div>
                          <button className="bg-orange font-bold py-3 px-5 text-white rounded-lg">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <button
            {...getButtonProps(ActionKind.Next)}
            className="bg-orange rounded-full md:p-4 p-1 cursor-pointer">
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
        </div>
        <div {...getAnnouncerProps()} className="hidden">
          <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
