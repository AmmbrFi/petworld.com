import React from 'react'

const SectionOne = props => {
  return (
    <section className="container text-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="w-9/12">
          <h2>About us</h2>
          <p className="text-lg leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis
          </p>
        </div>
        <img src="Group236.png" alt="" />
      </div>
    </section>
  )
}

export default SectionOne
