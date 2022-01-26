import Footer from '../components/Footer'
import Image from 'next/image'
import Masthead from '../components/Membership/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Premium from '../components/Membership/Premium'
import Regular from '../components/Membership/Regular'
import SectionOne from '../components/Company/SectionOne'
import SectionTwo from '../components/Company/SectionTwo'
import Team from '../components/Company/Team'

export default function Home() {
  return (
    <>
      <NextSeo title="Memberships" />
      <main>
        <div
          className="bg-cover bg-center h-[460px] bg-gray-600"
          style={{ backgroundImage: 'url(/c-bg.png)' }}>
          <Menu />
          <Masthead />
        </div>
        <Premium />
        <Regular />
      </main>
      <Footer />
    </>
  )
}
