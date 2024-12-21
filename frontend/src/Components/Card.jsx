import React from 'react'

const Card = ({movie}) => {
    return (
        <div className="w-full max-w-[220px]">
            <div className="w-full h-[340px]">
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