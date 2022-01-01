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
      <div className="flex flex-col items-center justify-center w-2/5 mx-auto h-full">
        <div className="text-orange flex flex-row">
          <img src="/pin.svg" alt="" className="mr-1" />
          Hong kong
        </div>
        <h2 className="mb-3">What it is?</h2>
        <p className="text-gray-600 text-center leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis
        </p>
      </div>
    </section>
  )
}

export default Whatitis
