import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { subCategory } from '../../actions'

const Tags = ({ category, list = 'all', setList }) => {
  const [subCategories, setSubCategories] = useState([])

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
    <div className="flex flex-row md:space-x-6 space-x-2 mt-12">
      <div
        className={`${
          list === 'all' ? 'bg-orange text-white' : 'text-black bg-gray-200'
        } rounded-full md:px-10 md:py-2 px-3  cursor-pointer`}
        onClick={() => setList('all')}>
        All
      </div>

      {subCategories &&
        subCategories.map((cat, i) => {
          return (
            <div
              className={`${
                cat === list ? 'bg-orange text-white' : 'text-black bg-gray-200'
              } rounded-full md:px-10 md:py-2 px-3  cursor-pointer`}
              key={i}
              onClick={() => setList(cat)}>
              {cat}
            </div>
          )
        })}
    </div>
  )
}

export default Tags
