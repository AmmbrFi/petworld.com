import React from 'react'

const NFTDetail = () => {
  return (
    <div>
      <div className="container px-4 my-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={`/Anjing.png`} className="w-full" alt="Animals" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-black">Anjing</h1>
            <p className="text-base">Diamond</p>

            <div className="flex flex-col my-4 space-y-5">
              <p>
                {`Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. At room temperature and pressure, another solid form of carbon known as graphite is the chemically stable form of carbon, but diamond converts to it extremely slowly. Diamond has the highest hardness and thermal conductivity of any natural material, properties that are used in major industrial applications such as cutting and polishing tools.`}
              </p>
              <p className="text-black text-2xl">99,000</p>
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
