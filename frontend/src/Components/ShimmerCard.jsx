import React from 'react'

const ShimmerCard = () => {
    return (
        <div className="w-full max-w-[145px] lg:max-w-[220px] ">
            <div onClick={() => navigate(`/${movie?._id}/movie-detail`)} className="w-full h-[250px] lg:h-[340px] bg-slate-200 rounded-md animate-pulse cursor-pointer">
                {/* <img src={movie?.primaryImage} alt="img" className='w-full h-full object-cover rounded-md' /> */}
            </div>
            <div className="text-white px-2 py-2 flex flex-col gap-2 items-center">
                <h1 className='w-3/4 h-4 rounded-sm bg-slate-200 animate-pulse'></h1>
                <p className='w-2/4 h-4 rounded-sm bg-slate-200 animate-pulse'></p>

            </div>
        </div>
    )
}

export default ShimmerCard