import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularMovies, setPage } from '../redux/slices/popularSlice.js'
import ShimmerCard from './ShimmerCard.jsx'

const Home = () => {

  const dummy = [0, 1, 2, 3, 4, 5, 6, 7]
  const dispatch = useDispatch();
  const { popular, loading, error, page } = useSelector((state) => state.popular)

  const moviePerPage = 12;
  const totalPage = popular ? Math.ceil(popular.length / moviePerPage) : null;
  const startIndex = (page-1)*moviePerPage;
  const endIndex = page * moviePerPage;

  useEffect(() => {
    dispatch(setPage(1))
    dispatch(fetchPopularMovies())

  }, []);

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

  if (error) return <p className='text-red-500 text-xl text-center'>Error : {error}</p>

  return (
    <>
      <div className='py-10'>
        <div className="m-auto  flex justify-center gap-16 flex-wrap">

          {popular.length > 0 ? (
            popular.slice(startIndex,endIndex).map((movie, index) => {
              return (
                <Card key={index} movie={movie} />
              )
            })
          ) : (
            <p className='text-white text-xl text-center'>No popular movies found...</p>
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

export default Home