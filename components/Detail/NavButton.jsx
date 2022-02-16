import React from 'react'
import Link from 'next/link'

export const PreviousButton = ({ asset, category, subcategory }) => {
  if (asset === null) {
    return (
      <div className="opacity-50 cursor-not-allowed bg-orange rounded-full md:p-4 p-1">
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
      </div>
    )
  }
  return (
    <Link
      href="/nft/[category]/[subcategory]/[asset]"
      as={`/nft/${category}/${subcategory}/${asset}`}>
      <a
        className={`${
          asset === null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } bg-orange rounded-full md:p-4 p-1`}>
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
  )
}

export const NextButton = ({ asset, category, subcategory }) => {
  if (asset === null) {
    return (
      <div className="opacity-50 cursor-not-allowed bg-orange rounded-full md:p-4 p-1">
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
      </div>
    )
  }
  return (
    <Link
      href="/nft/[category]/[subcategory]/[asset]"
      as={`/nft/${category}/${subcategory}/${asset}`}>
      <a
        className={`${
          asset === null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } bg-orange rounded-full md:p-4 p-1`}>
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
  )
}
