import Contact from '../components/Contact'
import Feature from '../components/Contact/Feature'
import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Contact/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import SectionOne from '../components/Company/SectionOne'

const Faq = () => {
  return (
    <>
      <NextSeo title="FAQ" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/contact-bg.png)' }}>
          <Menu />

          <section className="flex flex-col items-center justify-center w-full md:w-5/12 mx-auto text-center">
            <h1 className="font-serif md:text-6xl text-4xl">FAQ</h1>
          </section>
        </div>

        <section>
          <div className="container text-black">
            <h1 className="text-2xl mb-10">
              How do I set up a wallet to buy NFTs?
            </h1>
            <p>
              {`The recommended wallet to use is `}
              <a
                href="https://metamask.io"
                target="_blank"
                rel="noreferrer"
                className="border-b border-dashed text-blue-500">
                Metamask
              </a>
              {' and this '}
              <a
                href="https://youtu.be/uyZg0huCTYM"
                target="_blank"
                rel="noreferrer"
                className="border-b border-dashed text-blue-500">
                video
              </a>
              {' shows you how.'}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Faq
