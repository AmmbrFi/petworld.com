import React from 'react'

const Membership = props => {
  return (
    <section className="container mt-24">
      <div className="flex flex-row items-center justify-between">
        <h2>Membership plans and day visitors</h2>
        <div className="btn">Contact Us</div>
      </div>

      <div className="w-full bg-blue py-20 text-gray-800">
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-lg bg-white mt-4 flex flex-col p-8 drop-shadow-2xl">
            <p className="text-orange font-serif font-medium">Basic</p>
            <div className="text-3xl font-bold font-serif mt-6">Free</div>
            <div className="text-sm">
              <div className="py-2">Max of 5 sheets per session</div>
              <div className="py-2">Present your work via HDMI or AirPlay</div>
            </div>
            <div className="mt-8 mb-8 mt-auto">
              <a href="#" className="btn">
                Try it for Free
              </a>
            </div>
          </div>
          <div
            className="flex-1 lg:flex-initial lg:w-1/4 rounded-lg mt-4 sm:-mt-4 shadow-lg p-8 z-30 flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden scale-105"
            style={{ backgroundImage: 'url(/pattern.svg)' }}>
            <p className="text-white font-serif font-medium">Premium</p>

            <div className="w-full text-3xl font-bold font-serif text-white mt-6">
              $52
            </div>
            <div className="w-full text-sm text-white">
              <div className="py-2">Max of 5 sheets per session</div>
              <div className="py-2">Present your work via HDMI or AirPlay</div>
            </div>

            <div className="w-full mb-8 mt-auto">
              <a href="#" className="btn alt full">
                Buy Now
              </a>
            </div>
          </div>
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-lg bg-white p-8 mt-4 flex flex-col drop-shadow-2xl">
            <p className="text-orange font-serif font-medium">Gold</p>

            <div className="w-full text-3xl font-bold font-serif mt-6">$22</div>
            <div className="text-sm mb-10">
              <div className="py-2">Max of 5 sheets per session</div>
              <div className="py-2">Present your work via HDMI or AirPlay</div>
            </div>

            <div className="pt-8 mb-8 mt-auto">
              <a href="#" className="btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Membership
