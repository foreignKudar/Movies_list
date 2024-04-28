import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getMovies } from '../data/moviesSlice'
import { useSelector, useDispatch } from 'react-redux'

import { AiFillStar } from "react-icons/ai";

const Movies = ({title}) => {

    const dispatch = useDispatch()
    const {movies} = useSelector((state) => state.movies)
    const moviesList = movies.docs;
  
    useEffect(() => {
        dispatch(getMovies())    
    }, [])

    // const {id, poster: {previewUrl}, name, year, rating: {kp}} = movies.docs[0]

    


  return (
    <>
        <h1 className='w-1/2 p-4 mx-auto text-center text-white font-bold'>{title}</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-7 '>
        {moviesList?.map(({ id, poster: { previewUrl }, name, year, rating: { kp } }) => (
            <Link to={`/movies/${id}`} key={id}>
            <div>
                <div className='flex flex-col p-4 bg-white rounded shadow-md'>
                    <div className='w-full h-auto bg-cover'>
                        <img src={previewUrl} className='h-full w-full object-scale-down' alt="" />
                    </div>
                    

                    
                    <h2 className='text-lg font-bold'>{name}</h2>
                    <h2 className='text-sm'>{year}</h2>
                    <div className='flex items-center'>
                    <AiFillStar className='text-yellow-500'/>
                    <div className='text-sm'>{kp}</div>
                    </div>
                </div>
            </div>
            </Link>
        ))}
</div>

        

          
    </>
  )
}

export default Movies