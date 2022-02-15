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
    <div className="flex flex-row flex-wrap md:space-x-6 space-x-3 space-y-2 md:space-y-0 mt-12">
      <Link
        href="/nft/[category]/all/[tokenId]"
        as={`/nft/${category}/all/${tokenId}`}>
        <a
          className={`${
            subCat === 'all' ? 'bg-orange text-white' : 'text-black bg-gray-200'
          } rounded-full md:px-8 md:py-2 py-1 px-3 cursor-pointer font-medium`}>
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
                } rounded-full md:px-8 md:py-2 px-3 cursor-pointer font-medium`}>
                {cat.name}
              </a>
            </Link>
          )
        })}
    </div>
  )
}

export default Tags
