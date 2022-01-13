import React from 'react'

const Whatitis = props => {
  return (
    <section className="container relative h-[500px] py-20">
      <img
        src="/Group209.svg"
        alt=""
        className="absolute top-10 right-[200px]"
      />
      <img
        src="/Group208.svg"
        alt=""
        className="absolute top-10 left-[200px]"
      />
      <img
        src="/Group210.svg"
        alt=""
        className="absolute bottom-10 right-[200px]"
      />
      <div className="flex flex-col items-center justify-center w-full md:w-full mx-auto h-full">
        <div className="text-orange flex flex-row">
          <img src="/pin.svg" alt="" className="mr-1" />
          Hong kong
        </div>
        <h2 className="mb-3">What is Pet World ?</h2>
        <p className="text-gray-600 text-center leading-7">
          Do you have to leave your best friend at home because the venue you
          are visiting has a “NO PETS” sign?
          <br />
          Do you wish hotels and restaurants, and the many other places you
          socialise in also accepted your pet?
          <br />
          Look no further. Pet World is that inclusive and welcoming place.
          <br />
          Opening soon in Hong Kong, and then the world.
        </p>
      </div>
    </section>
  )
}

export default Whatitis
