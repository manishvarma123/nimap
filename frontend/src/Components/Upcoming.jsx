import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpcomingMovies, setPage } from '../redux/slices/upcomingSlice.js'
import ShimmerCard from './ShimmerCard.jsx'

const Upcoming = () => {

  const dummy = [0, 1, 2, 3, 4, 5, 6, 7]
  const dispatch = useDispatch();
  const { upcoming, loading, error, page } = useSelector((state) => state.upcoming)

  const moviePerPage = 12;
  const totalPage = upcoming ? Math.ceil(upcoming.length / moviePerPage) : null;
  const startIndex = (page - 1) * moviePerPage;
  const endIndex = page * moviePerPage;

  useEffect(() => {

    dispatch(setPage(1))
    dispatch(fetchUpcomingMovies())

  }, [])

  if (loading) {
    return (
      <div className='py-10 w-full h-full'>
        <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">

          {
            dummy.map((movie, index) => {
              return (
                <ShimmerCard key={index} />
              )
            })
          }

        </div>
      </div>
    )
  }

  if (error) return <p className='text-center text-xl text-white'>Error : {error}</p>


  return (
    <>
      <div className='py-10 w-full h-full'>
        <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">

          {upcoming.length > 0 ? (
            upcoming.slice(startIndex, endIndex).map((movie, index) => {
              return (
                <Card key={index} movie={movie} />
              )
            })
          ) : (
            <p className='text-center text-xl text-white'>No upcoming movies found</p>
          )}

        </div>
      </div>
      <div className="flex justify-center items-center pb-6 fixed bottom-1 left-0 right-0">
        <button onClick={() => page > 1 && dispatch(setPage(page - 1))} disabled={page === 1} className='bg-black text-white w-[100px] px-3 py-1.5 rounded-md'>Previous</button>
        <p className='text-lg text-black bg-white px-6'>{page} of {totalPage}</p>
        <button onClick={() => page < totalPage && dispatch(setPage(page + 1))} disabled={page === totalPage} className='bg-black text-white w-[100px] px-3 py-1.5 rounded-md'>Next</button>
      </div>
    </>
  )
}

export default Upcoming