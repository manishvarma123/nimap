import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full lg:px-20'>
        <div className="w-full flex justify-between items-center">
            <h1>MovieDb</h1>
            <div className="flex justify-end items-center gap-3">
                <div className="text-gray-300 flex items-center gap-4 text-sm">
                    <Link to={'/'}>Popular</Link>
                    <Link to={'/top-rated'}>Top Rated</Link>
                    <Link to={'/upcoming'}>Upcoming</Link>
                </div>
                <input type="text" placeholder='Movie Name' className='bg-white rounded-sm text-sm px-2 py-1' />
                <button className='bg-gray-500 text-white px-3 text-sm py-1 rounded-sm'>Search</button>
            </div>
        </div>

    </div>
  )
}

export default Nav