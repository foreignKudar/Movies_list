import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { AiFillStar } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import { useDispatch } from 'react-redux';

import { deleteFavorite } from '../data/favoritesSlice';

const Favorites = () => {

    const dispatch = useDispatch()

    const {favorites} = useSelector((state) => state.favorites);

    const handleDeleteFavorite = (id) => {
        dispatch(deleteFavorite(id))
    }

  return (
    <>
        <h1 className='text-center text-white font-bold text-3xl mb-4'>Избранное</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-7 '>
            {favorites?.map(({ id, poster: { previewUrl }, name, year, rating: { kp } }) => (

                
                
                    <div className='flex flex-col p-4 bg-white rounded shadow-md'>
                        <Link to={`/movies/${id}`} key={id}>
                            <div className='w-full h-auto bg-cover'>
                                <img src={previewUrl} className='h-full w-full object-scale-down' alt="" />
                            </div>
                            
                            <h2 className='text-lg font-bold'>{name}</h2>
                            <h2 className='text-sm'>{year}</h2>
                            <div className='flex items-center'>
                                <AiFillStar className='text-yellow-500'/>
                            </div>
                            <div className='text-sm'>{kp}</div>
                        </Link>
                        <AiFillDelete className='ml-auto text-red-500 text-3xl' onClick={() => handleDeleteFavorite(id)}/>
                        
                    </div>
                
                

            ))}
        </div>
    </>
  )
}

export default Favorites