import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ movie }) => {

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[145px] lg:max-w-[220px] ">
            <div onClick={() => navigate(`/${movie?._id}/movie-detail`)} className="w-full h-[250px] lg:h-[340px] cursor-pointer">
                <img src={movie?.primaryImage} alt="img" className='w-full h-full object-cover rounded-md' />
            </div>
            <div className="text-white text-centerpx-2 py-2 flex flex-col gap-2 items-center">
                <h1 className='leading-4 text-center'>{movie?.title}</h1>
                <p>Rating : <span>{movie?.averageRating}</span></p>
            </div>
        </div>
    )
}

export default Card