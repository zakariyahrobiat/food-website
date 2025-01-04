import React from 'react'

const BackgroundLayout = ({children}) => {
  return (
    <div className="flex justify-center items-center h-[100%] relative bg-blue-100 overflow-hidden">
      <div className='w-screen'>{children}</div></div>
  )
}

export default BackgroundLayout