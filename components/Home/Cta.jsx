import Link from 'next/link'
import React from 'react'

const Cta = props => {
  return (
    <section className="relative my-24 py-24">
      <img src="/dog.svg" className="absolute right-0 md:-top-5 -top-8" />
      <img src="/Group210.svg" className="absolute -left-10 bottom-0" />
      <div
        className="container bg-cover rounded-lg overflow-hidden bg-no-repeat h-[410px]"
        style={{ backgroundImage: 'url(/Group281.png)' }}>
        <div className="flex flex-col justify-between h-full py-10">
          <h2 className="text-white w-64 leading-8">Buy your membership now</h2>
          <Link href="/contact">
            <a className="btn max-w-max">Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
