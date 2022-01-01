import Link from 'next/link'
import React from 'react'

const Masthead = props => {
  return (
    <section className="flex flex-col items-center justify-center w-full md:w-5/12 mx-auto text-center h-[400px]">
      <h1 className="font-serif text-6xl">Pet world park</h1>
      <p className="text-xl my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </p>
      <Link href="/contact">
        <a className="btn">Contact</a>
      </Link>
    </section>
  )
}

export default Masthead
