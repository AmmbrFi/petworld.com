import React from 'react'

const Facilities = props => {
  return (
    <section className="w-screen">
      <div className="container">
        <h2>Facilities on offer</h2>
      </div>
      <div className="py-16 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>HOTEL</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>RESTAURANT</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>SPA</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>POOL</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>VET</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>PET HOTEL</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>GIFT SHOP</p>
          </div>
          <div className="rbox patrn p-10 text-center text-2xl">
            <p>PARK</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
