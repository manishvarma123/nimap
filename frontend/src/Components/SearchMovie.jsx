import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMovie } from '../redux/slices/searchSlice';
import ShimmerCard from './ShimmerCard';

const SearchMovie = () => {

    const dummy = [0, 1, 2]
    const dispatch = useDispatch();
    const { searchMovie, loading, error } = useSelector((state) => state.search)
    const [searchParams] = useSearchParams();

    const query = searchParams.get('query');


    useEffect(() => {
        if (!query) return;

        dispatch(fetchSearchMovie(query))

    }, [query, dispatch])

    if (loading) {
        return (
            <div className='py-10 w-full h-full'>
                <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">

                    {

                        dummy.map((movie, index) => {
                            return (
                                <ShimmerCard key={index}/>
                            )
                        })

                    }

                </div>
            </div>
        )
    }

    if (error) return <p className='text-center text-white text-xl'>Error : {error}</p>

    return (
        <div className='py-10 w-full h-full'>
            <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">

                {
                    searchMovie.length > 0 ? (
                        searchMovie.map((movie, index) => {
                            return (
                                <Card key={index} movie={movie} />
                            )
                        })
                    ) : (
                        <p className='text-white text-xl text-center'>No results found for "{query}".</p>
                    )

                }

            </div>
        </div>
    )
}

export default SearchMovie