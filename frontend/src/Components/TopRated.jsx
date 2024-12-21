import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const TopRated = () => {

  const [data,setData] = useState([])

  useEffect(()=>{

    const popularmovie =async () => {
      try {
        const res = await axios.get('https://nimap.onrender.com/api/v1/movies/top-rated');
        setData(res.data.data)
        console.log(res)

      } catch (error) {
        console.error(error.response.message || 'Error fetching popular movies:');
      }
    }

    popularmovie()
    
  },[])

  return (
    <div className='py-10 w-full h-full'>
      <div className="m-auto w-full h-full flex justify-center gap-16 flex-wrap">
        
        {
          data.map((movie,index)=>{
            return (
              <Card key={index} movie={movie}/>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default TopRated