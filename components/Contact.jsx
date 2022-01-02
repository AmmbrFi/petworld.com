import React from 'react'

const Contact = props => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-9/12">
            <h2>Fill form</h2>
            <p className="text-lg leading-relaxed text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus{' '}
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
