import React from 'react'

const NFTDetail = () => {
  return (
    <div>
      <div className="container px-4 my-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={`https://placeimg.com/600/700/animals`}
              className="w-full"
              alt="Animals"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-black">Name</h1>
            <p className="text-base">Diamond</p>

            <div className="flex flex-col my-4 space-y-5">
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`}
              </p>
              <p className="text-black text-2xl">1600 BUSD</p>
            </div>
            <button className="bg-green-500 font-bold py-2 px-4 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
