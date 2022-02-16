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
    <div className="grid md:grid-cols-10 grid-cols-3 md:gap-x-6 gap-x-3 md:gap-y-3 gap-y-3  mt-12">
      <Link
        href="/nft/[category]/all/[tokenId]"
        as={`/nft/${category}/all/${tokenId}`}>
        <a
          className={`${
            subCat === 'all' ? 'bg-orange text-white' : 'text-black bg-gray-200'
          } rounded-full md:py-3 py-2  text-center cursor-pointer font-medium`}>
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
                } rounded-full md:py-3 py-2  text-center cursor-pointer font-medium`}>
                {cat.name}
              </a>
            </Link>
          )
        })}
    </div>
  )
}

export default Tags
