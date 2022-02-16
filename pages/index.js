import ComingSoon from '../components/ComingSoon'
import Contact from '../components/Contact'
import Cta from '../components/Home/Cta'
import Facilities from '../components/Home/Facilities'
import Footer from '../components/Footer'
import Image from 'next/image'
import LinksInfo from '../components/LinksInfo'
import Masthead from '../components/Home/Masthead'
import Membership from '../components/Home/Membership'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Partners from '../components/Home/Partners'
import Premium from '../components/Membership/Premium'
import Regular from '../components/Membership/Regular'
import Whatitis from '../components/Home/Whatitis'

// <div
//   className="bg-cover bg-center h-[687px] bg-gray-600"
//   style={{ backgroundImage: 'url(/mast-1.svg)' }}>
//   <Menu />
//   <Masthead />
// </div>
// <Whatitis />
// <Facilities />
// <Membership />
// <Cta />
// <Partners />
// <Contact />
//<ComingSoon />
//<Premium />
//<Regular />

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <main>
        <div className="relative md:h-screen">
          <div className="md:absolute top-0 left-0 w-screen h-[280px] md:h-[800px]">
            <video autoPlay loop muted>
              <source src="/landing-1.webm" type="video/webm" />
              <source src="/landing-1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-0 left-0 w-screen h-[800px]">
            <Menu />
            <Masthead />
          </div>
        </div>
        <div className="relative">
          <Whatitis />
          <Facilities />
          <Premium />
          <Regular />

          <LinksInfo />

          <Cta />

          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
