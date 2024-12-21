import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Nav = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [open,setOpen] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) {
      return alert('Please enter a movie name')
    }

    navigate(`/search?query=${query}`)
  }


  return (
    <div className='w-full lg:px-20'>
      <div className="w-full flex justify-between items-center">
        <h1>MovieDb</h1>

        <div className="flex justify-end items-center gap-3">
          <div className="text-gray-300 hidden md:flex items-center gap-4  text-sm ">
            <Link to={'/'}>Popular</Link>
            <Link to={'/top-rated'}>Top Rated</Link>
            <Link to={'/upcoming'}>Upcoming</Link>
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Movie Name' className='bg-white text-black rounded-sm text-sm px-2 py-1' />
          <button onClick={handleSearch} className='text-white text-sm py-1 rounded-sm md:hidden'><FaSearch className='text-white' /></button>
          <button onClick={handleSearch} className='bg-gray-500 hidden md:block text-white px-3 text-sm py-1 rounded-sm'>Search</button>
        <span><IoReorderThree onClick={()=>setOpen(!open)} className='text-white text-4xl md:hidden' /></span>
        </div>

      </div>
      <div className={`${open ? 'block' : 'hidden'} flex flex-col items-center gap-2 py-4`}>
        <Link to={'/'} onClick={()=>setOpen(!open)}>Popular</Link>
        <Link to={'/top-rated'} onClick={()=>setOpen(!open)}>Top Rated</Link>
        <Link to={'/upcoming'} onClick={()=>setOpen(!open)}>Upcoming</Link>
      </div>

    </div>
  )
}

export default Nav