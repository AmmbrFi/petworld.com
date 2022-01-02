import React from 'react'

const Facilities = props => {
  return (
    <section className="w-screen">
      <div className="container">
        <h2>Facilities on offer</h2>
      </div>
      <div className="py-16 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -rotate-1">
          <div className="rbox">
            <p>Hotel</p>
          </div>
          <div className="rbox">
            <p>Spa</p>
          </div>
          <div className="rbox">
            <p>Restaurant</p>
          </div>
          <div className="rbox">
            <p>Pool</p>
          </div>
          <div className="rbox">
            <p>Pet Hotel</p>
          </div>
          <div className="rbox">
            <p>Veterinary</p>
          </div>
          <div className="rbox">
            <p>Pool</p>
          </div>
          <div className="rbox">
            <p>Hotel</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
