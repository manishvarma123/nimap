import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../redux/slices/movieDetailSlice'

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { detail, loading, error } = useSelector((state) => state.detail)

    const { id } = useParams();
    useEffect(() => {

        dispatch(fetchMovieDetail(id))

    }, [])

    if (loading) {
        return (
            <div className='w-full min-h-[75vh] bg-[#06061c] grid grid-cols-5 rounded-md overflow-hidden'>

                <div className="w-full col-span-3 p-3">
                    <div className="flex gap-3 mb-5">
                        <img className='w-[115px] h-[180px] rounded-sm bg-slate-200 animate-pulse' />
                        <div className="space-y-3">
                            <h1 className='w-[200px] h-[18px] bg-slate-200 animate-pulse rounded-sm'></h1>
                            <h2 className='w-[150px] h-[16px] bg-slate-200 animate-pulse rounded-sm'></h2>
                            
                            <p className='w-[200px] h-[17px] bg-slate-200 animate-pulse rounded-sm'></p>
                            <p className='w-[180px] h-[16px] bg-slate-200 animate-pulse rounded-sm'></p>
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <h1 className='w-[100px] h-[18px] bg-slate-200 animate-pulse mb-3 rounded-sm'></h1>
                        <p className='w-full h-[16px] mb-2 bg-slate-200 animate-pulse rounded-sm'></p>
                        <p className='w-full mr-[100px] h-[16px] bg-slate-200 animate-pulse rounded-sm'></p>
                    </div>
                    <Link><button className='w-[100px] h-[30px] rounded-md bg-slate-200'></button></Link>

                </div>
                <div className="w-full h-full col-span-2 flex justify-end items-end">
                    <img className='w-3/4 h-full bg-slate-200 animate-pulse' />
                </div>

            </div>
        )
    }

    if (error) return <p className='text-white text-xl text-center'>Error : {error}</p>


    return (
        <div className='w-full min-h-[75vh] bg-[#06061c] md:grid grid-cols-5 rounded-md overflow-hidden'>

            <div className=" col-span-3 p-3">
                <div className="flex gap-3 mb-5">
                    <img src={detail?.primaryImage} alt="poster"
                        className='w-[115px] h-[180px] rounded-sm' />
                    <div className="text-[#999999] space-y-3">
                        <h1 className='text-white text-2xl'>{detail?.title || 'Movie Title'}</h1>
                        <h2 className='text-xl'>Rating : <span>{detail?.averageRating || 'N/A'}</span></h2>
                        <p><span className='px-2 py-0.5 rounded-md pb-0.5 mr-2 border-2 border-[#999999]'>{detail?.runtimeMinutes || 'N/A'} min</span> {detail?.type || 'movie'}</p>
                        <p>Release Year : {detail?.startYear || 'Unknown'}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <h1 className='text-white text-2xl mb-3'>Overview</h1>
                    <p className='text-[#999999]'>{detail?.description || 'No overview available for this movie. Please check back later.'}</p>
                </div>
                <Link to={detail?.url}><button className='px-3 py-1.5 border-white border-2 rounded-md bg-black text-white'>Watch Now</button></Link>

            </div>
            <div className="w-full max-h-[75vh] hidden col-span-2 md:flex justify-end items-end">
                <img src={detail?.primaryImage} alt="poster" className='h-full object-contain' />
            </div>

        </div>
    )
}

export default MovieDetail