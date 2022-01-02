import Contact from '../components/Contact'
import Cta from '../components/Home/Cta'
import Facilities from '../components/Home/Facilities'
import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Home/Masthead'
import Membership from '../components/Home/Membership'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Partners from '../components/Home/Partners'
import Whatitis from '../components/Home/Whatitis'

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <main>
        <div
          className="bg-cover bg-center h-[687px]"
          style={{ backgroundImage: 'url(/mast-1.svg)' }}>
          <Menu />
          <Masthead />
        </div>
        <Whatitis />
        <Facilities />
        <Membership />
        <Cta />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
