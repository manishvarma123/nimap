import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const MainLayout = () => {
  return (
    <>
      <div className='w-screen h-screen flex flex-col'>
        <div className="w-full bg-black/70 text-white">
          <div className="w-full max-w-[1200px] m-auto px-3 py-1.5 md:py-3">
            <Nav />
          </div>
        </div>

        <div className="w-full bg-black/80 flex-1 overflow-y-auto">
          <div className="w-full h-full max-w-[1200px] m-auto p-2 lg:py-5">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  )
}

export default MainLayout