import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const menu = [
  { title: 'Home', path: '/' },
  { title: 'Company', path: '/company' },
  { title: 'Membership', path: '/membership' },
  { title: 'NFT store', path: '/nftstore' },
  { title: 'Contact', path: '/contact' }
]

const Footer = props => {
  const router = useRouter()

  return (
    <footer
      style={{ backgroundImage: 'url(/footer-bg.png)' }}
      className="bg-contain bg-bottom bg-no-repeat pb-32">
      <div className="container rounded-none md:rounded-lg border border-gray-200 text-gray-500 h-[240px] md:h-[360px] bg-white">
        <div className="flex flex-row justify-between items-center p-4 md:p-10">
          <Link href="/">
            <a className="cursor-pointer">
              <img src="/logo-orange.svg" alt="logo" height="43" width="192" />
            </a>
          </Link>
          <div className="hidden md:block flex flex-row items-center space-x-4 md:space-x-8">
            {menu.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={`cursor-pointer under-line text-gray-500 ${
                      router.pathname === item.path
                        ? 'text-oranges active'
                        : 'hover:text-orange'
                    }`}>
                    {item.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="hidden md:flex flex-col px-4 md:px-10 text-orange mt-6">
          <p>1111-12, 11th floor, Lu Plaza, 2 Wing Yip Street,</p>
          <p>Kwun Tong, Kowloon, Hong Kong</p>
        </div>
        <div className="border-t border-gray-200 my-4" />

        <div className="flex flex-row justify-between items-center p-4 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6">
            <p className="text-gray-300">Copyright Pet World 2021</p>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500">T&C</a>
            </Link>
          </div>

          <div className="flex flex-row items-center md:space-x-4 space-x-2">
            <Link href="https://www.facebook.com/Pet-Paws-NFT-103456708915004">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Group218.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/petpawsnft/">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Group219.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="https://twitter.com/petpawsnft">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Group220.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="https://www.pinterest.com/PetPawsNFT/">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Pintrest.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/petpawsnft">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Twitch.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="https://t.me/+sR_gnanl9_Q4MTY0">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Telegram.png" className="h-8 w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer text-gray-500" target="_blank">
                <img src="/Discord_pet.png" className="h-8 w-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
