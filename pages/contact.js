import Contact from '../components/Contact'
import Feature from '../components/Contact/Feature'
import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Contact/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import SectionOne from '../components/Company/SectionOne'

export default function Home() {
  return (
    <>
      <NextSeo title="Contact Us" />
      <main>
        <div
          className="bg-cover bg-center h-[380px]"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <SectionOne />
        <Feature />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
