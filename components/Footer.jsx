import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const menu = [
  { title: 'Home', path: '/' },
  { title: 'Company', path: '/company' },
  { title: 'Membership', path: '/membership' },
  { title: 'Contact', path: '/contact' }
]

const Footer = props => {
  const router = useRouter()

  return (
    <footer
      style={{ backgroundImage: 'url(/footer-bg.png)' }}
      className="bg-contain bg-bottom bg-no-repeat py-32 w-screen">
      <div className="container rounded-lg border border-gray-300 text-gray-500 h-[360px] bg-white">
        <div className="flex flex-row justify-between items-center p-10">
          <img src="/logo-orange.svg" alt="logo" className="w-48" />
          <div className="hidden md:block flex flex-row items-center space-x-4 md:space-x-12">
            {menu.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={`cursor-pointer under-line text-gray-500 ${
                      router.pathname === item.path
                        ? 'text-orange active'
                        : 'hover:text-orange'
                    }`}>
                    {item.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-10 text-orange mt-6">
          <p>Hong Kong, street 123</p>
          <p>office@petworld.com</p>
        </div>
        <div className="border-t border-gray-200 my-4" />

        <div className="flex flex-row justify-between items-center p-10">
          <div className="flex flex-row items-center space-x-4 md:space-x-12">
            <p className="text-gray-300">Copyright Pet World 2021</p>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">T&C</a>
            </Link>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <Link href="/">
              <a className="cursor-pointer text-gray-500">
                <img src="/Group218.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">
                <img src="/Group219.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">
                <img src="/Group220.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">
                <img src="/Group221.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">
                <img src="/Group222.png" className="h-8 w-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
