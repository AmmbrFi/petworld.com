import Link from 'next/link'
import React from 'react'

const Masthead = props => {
  return (
    <section className="flex flex-col items-center justify-center w-full md:w-5/12 mx-auto text-center md:h-[600px]">
      <h1 className="font-serif md:text-6xl text-5xl my-4">Pet world park</h1>

      <Link href="/contact">
        <a className="btn">Contact</a>
      </Link>
    </section>
  )
}

export default Masthead
