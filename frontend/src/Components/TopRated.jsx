import React, { useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopMovies, setPage } from '../redux/slices/topRatedSlice.js'
import ShimmerCard from './ShimmerCard.jsx'

const TopRated = () => {

  const dummy = [0, 1, 2, 3, 4, 5, 6, 7]
  const dispatch = useDispatch();
  const { top_rated, loading, error, page } = useSelector((state) => state.top)

  const moviePerPage = 12;
  const totalPage = top_rated ? Math.ceil(top_rated.length / moviePerPage) : null;
  const startIndex = (page - 1) * moviePerPage;
  const endIndex = page * moviePerPage;

  useEffect(() => {

    dispatch(setPage(1))
    dispatch(fetchTopMovies())

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

  if (error) return <p className='text-white text-center text-xl'>Error : {error}</p>

  return (
    <>
      <div className='py-10 w-full h-full'>
        <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">

          {top_rated.length > 0 ? (
            top_rated.slice(startIndex, endIndex).map((movie, index) => {
              return (
                <Card key={index} movie={movie} />
              )
            })
          ) : (
            <p className='text-center text-xl text-white'>No popular movies found</p>
          )

          }

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

export default TopRated