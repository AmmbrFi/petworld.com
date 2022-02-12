import React from 'react'

const Loading = props => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-ping">
      <div className="w-2 h-2 bg-orange rounded-full"></div>
      <div className="w-2 h-2 bg-orange rounded-full"></div>
      <div className="w-2 h-2 bg-orange rounded-full"></div>
      <div className="w-2 h-2 bg-orange rounded-full"></div>
      <div className="w-2 h-2 bg-orange rounded-full"></div>
    </div>
  )
}

export default Loading
