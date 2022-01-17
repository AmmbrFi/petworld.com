import React from 'react'

const Contact = props => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-9/12">
            <h2>Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-500 mt-4">
              We are always pleased to receive messages, even if its just to
              tell us you like our work or to tell us about your pet.
            </p>
            <p className="text-lg leading-relaxed text-gray-500 mt-4">
              Feel free to also contact us about partnership opportunities in
              your business.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="500"
              name="ZARK2MrtrG"
              loading="lazy"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              src="https://fom.li/f/ZARK2MrtrG"
              frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
