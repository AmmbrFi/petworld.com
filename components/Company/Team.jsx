import React from 'react'

const Team = props => {
  return (
    <section className="container">
      <h2>Our team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="rbox patrn">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl mt-3 font-bold">Chairman & CEO</p>
            <p className="text-lg mt-2 font-bold">Mark Chan Yan Tak</p>
            <p className="mt-2 px-4 text-center">
              Mark is a successful entrepreneur, CEO, Executive Director and
              Chairman of the Board of a listed Hong Kong entity. His latest
              venture, operating in the health and supplements industry for pets
              and humans, led him to conceiving of and launching Global Pet
              World Holdings and the Pet World project. Mark has been in this
              space for over 15 years, with extensive experience in product
              development, brand building, marketing, advertising, and retail
              operations.
            </p>
          </div>
        </div>
        <div className="rbox patrn">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl mt-3 font-bold">Advisor</p>
            <p className="text-lg mt-2 font-bold">Rakesh Rajagopal</p>
            <p className="mt-2 px-4 text-center">
              Rakesh boasts an accomplished career in private banking,
              commodities, precious metals, and gemstones with companies like
              Sacvinam Global and Poly Resources (part of the Chinese
              conglomerate), Upbest Precious Metals. In 2011 Raj was invited to
              join the Canadian Imperial Bank of Commerce in the role of
              director of private banking. Other than operational involvement in
              their technology ventures, Raj owns a portfolio of mining
              interests with his partner, Derick Smith. In recent years he has
              co-founded several technology ventures, first in telecoms and more
              recently, blockchain technology.
            </p>
          </div>
        </div>
        <div className="rbox patrn">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl mt-3 font-bold">Advisor</p>
            <p className="text-lg mt-2 font-bold">Derick Smith</p>
            <p className="mt-2 px-4 text-center">
              Derick started as a software engineer in the mid-1980s, working
              across a wide range of disciplines and technologies. His early
              ventures include one of the first point of sale solutions using
              cellular technology, wholesale telecoms and Mobile Virtual Network
              Operator implementations. He also built companies in
              manufacturing, commodities, and mining, retaining a portfolio of
              mining interests with his long-time partner, Rakesh Rajagopal.
              Since 2016 his focus has been on building impactful ventures in
              the explosive blockchain ecosystem
            </p>
          </div>
        </div>
        <div className="rbox patrn">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl mt-3 font-bold">Advisor</p>
            <p className="text-lg mt-2 font-bold">Martin Feuersteiner </p>
            <p className="mt-2 px-4 text-center">
              Martin is a highly-skilled individual with focus on disruptive
              technology, offering over 22 years of experience representing
              organisations in the field of medical device and information
              technology. He is well known as a key leader in bridging company
              development and business roadmaps between Europe and Asia,
              building networks in key countries and establishing long-lasting
              and sustainable relationships. Martin has cultivated a high level
              of cultural sensitivity for identifying key decision makers,
              building vital work relationships with key opinion leaders, as
              well as providing superior care and management through needs
              assessment and meticulous follow-through.
            </p>
          </div>
        </div>
        <div className="rbox patrn">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl mt-3 font-bold">Advisor</p>
            <p className="text-lg mt-2 font-bold">Jan Verkade</p>
            <p className="mt-2 px-4 text-center">
              Jan is a seasoned Dutch entrepreneur in consumer products, who has
              been based in Asia for over 20 years, has global exposure, and has
              built an extensive business network.
            </p>
            <p className="mt-2 px-4 text-center">
              As a connector of people he has his roots in agriculture and has
              over seven years experience as a life coach.
            </p>
            <p className="mt-2 px-4 text-center">
              {' '}
              Jan is an active investor, especially in the crypto space. Jan
              holds an EMBA degree from Kellogg-HKUST.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
