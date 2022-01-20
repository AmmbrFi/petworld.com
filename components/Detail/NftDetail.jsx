import React from 'react'

const NFTDetail = () => {
  return (
    <div>
      <div className="container px-4 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={`https://source.unsplash.com/300x300/?dark&q=${new Date().getMilliseconds()}`}
              className="w-full"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-3xl font-semibold text-black">Name</h1>
              <div className="z-20 rounded-full bg-gray-300 p-1 text-black hover:text-red-500 cursor-pointer bg-opacity-50 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24">
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    fill="currentColor"
                    d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start my-4">
              <div className="flex flex-row items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24">
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z" />
                </svg>
                <p className="text-black">120</p>
              </div>

              <div className="flex flex-row items-center justify-start ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
                <p className="text-black">1200</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 my-8">
              <div className="border-r border-gray-300">
                <p className="text-black">Price</p>
              </div>

              <div></div>
            </div>

            <div className="overflow-ellipsis h-32 overflow-hidden leading-relaxed text-black">
              Description
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
