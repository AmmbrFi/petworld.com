import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { subCategory } from '../../actions'
import { useLocalStorage } from '../../utils'

const Tags = ({ category, subCat, tokenId }) => {
  const [subCategories, setSubCategories] = useLocalStorage('subCategories', [])

  useEffect(() => {
    const fetchList = async () => {
      try {
        let result = await subCategory(category)

        setSubCategories(result.data.data.data ? result.data.data.data : [])
      } catch (err) {
        console.log(err)
      }
    }
    fetchList(category)
  }, [category])

  return (
    <div className="flex overflow-x-scroll hscroll hide-scroll-bar md:mt-8 mt-0">
      <div className="flex flex-nowrap space-x-3 py-3">
        <Link
          href="/nft/[category]/all/[tokenId]"
          as={`/nft/${category}/all/${tokenId}`}>
          <a
            className={`${
              subCat === 'all'
                ? 'bg-orange text-white'
                : 'text-black bg-gray-200'
            } rounded-full md:w-28 md:h-12 w-24 h-12 pt-3 text-center cursor-pointer font-medium`}>
            {' '}
            All
          </a>
        </Link>

        {subCategories &&
          subCategories.map((cat, i) => {
            const catName = cat.name.toLowerCase()
            return (
              <Link
                href="/nft/[category]/[catName]/[cat.tokenId]"
                as={`/nft/${category}/${catName}/${cat.tokenId}`}
                key={i}>
                <a
                  className={`${
                    catName === subCat
                      ? 'bg-orange text-white'
                      : 'text-black bg-gray-200'
                  } rounded-full md:w-28 md:h-12 w-24 h-12 pt-3  text-center cursor-pointer font-medium`}>
                  {cat.name}
                </a>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Tags
