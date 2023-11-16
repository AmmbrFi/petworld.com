import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { truncate } from '../utils'
import { useEthers } from '@usedapp/core'
import { useRouter } from 'next/router'

const innermenu = [
  { title: 'Home', path: '/' },
  { title: 'Company', path: '/company' },
  { title: 'Membership', path: '/membership' },
  { title: 'NFT store', path: '/nftstore' },
  { title: 'FAQ', path: '/faq' },
  {
    title: 'Whitepaper',
    path: '/Pet_World_whitepapereng1.3.pdf',
    target: '_blank'
  },
  { title: 'Contact', path: '/contact' }
]

const InnerMenu = props => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const { account } = useEthers()

  return (
    <nav className="container">
      <div className="flex flex-row justify-between items-center py-6 mx-auto pt-6">
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              src="/pet-logo.svg"
              alt="logo"
              className="w-48"
              priority
              height="43"
              width="192"
            />
          </a>
        </Link>

        <div className="hidden md:block flex flex-row items-center space-x-4 md:space-x-8 font-semibold menulinks">
          {innermenu.map((item, index) => {
            if (item.target) {
              return (
                <a
                  key={index}
                  className={`cursor-pointer under-line text-black hover:text-orange`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.path}
                  key={index}>
                  {item.title}
                </a>
              )
            }
            return (
              <Link key={index} href={item.path}>
                <a
                  className={`cursor-pointer under-line ${
                    item.title === 'NFT store'
                      ? 'text-orange active'
                      : 'text-black hover:text-orange'
                  }`}>
                  {item.title}
                </a>
              </Link>
            )
          })}
          {account && (
            <span className="border px-3 py-1 rounded-full text-gray-600">
              {truncate(account, 15)}
            </span>
          )}
        </div>
        <div className="relative md:hidden">
          <svg
            fill="orange"
            viewBox="0 0 20 20"
            className="w-10 h-10 cursor-pointer m-2"
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            )}
            {isOpen && (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            )}
          </svg>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-64 shadow-lg bg-orange ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[1rem]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                {innermenu.map((item, index) => {
                  return (
                    <Link key={index} href={item.path}>
                      <a
                        className={`text-gray-200 block px-4 py-2 text-2xl cursor-pointer ${
                          router.pathname === item.path
                            ? 'text-gray-200 active'
                            : 'hover:text-gray-500'
                        }`}
                        role="menuitem">
                        {item.title}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default InnerMenu
