import React from 'react'

const SectionOne = props => {
  return (
    <section className="container text-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="w-full md:w-9/12">
          <h2>About us</h2>
          <p className="text-lg leading-relaxed mt-2">
            Global Pets World Limited is a Hong Kong registered company that is
            developing a unique concept in hospitality and recreation – Pets
            World. <br />
            In the real world, Pet World will be a collection of themed parks
            that cater specifically to pet lovers and pets in a fully inclusive
            and welcoming atmosphere. Pets World offers hotels, pet hotels with
            full boarding, restaurants, spas, pools and parks, complemented by
            veterinary health facilities and retail outlets.
            <br />
            In the Metaverse,Pets World will occupy prominent locations and will
            offer pet owners various games and opportunities to earn income,
            accompanied by their virtual pet friends.
          </p>
        </div>
        <img src="Group236.png" alt="" />
      </div>
    </section>
  )
}

export default SectionOne
