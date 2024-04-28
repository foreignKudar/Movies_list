import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../data/favoritesSlice';


const SingleMovie = () => {

  

  const {id} = useParams();
  
  const {movies} = useSelector((state) => state.movies);
  const dispatch = useDispatch()
  const moviesList = movies.docs;
  const selectedMovie = moviesList?.find((movie) => {
    console.log(movie.id)
    console.log(id); 
    return movie?.id == id ? movie : null 
  });
  console.log(selectedMovie)

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie))
  }
  
  const {favorites} = useSelector((state) => state.favorites)
  console.log(favorites)

  return (
    <>
      {selectedMovie && (
        <div className='flex justify-center mb-12'>
        <div
          className='w-96 h-96 relative mx-auto rounded-lg overflow-hidden shadow-md'
          style={{ backgroundImage: `url(${selectedMovie?.poster?.url})` }}
        />
        <div className='ml-4'>
          <h2 className='text-2xl font-bold mb-2'>{selectedMovie?.name}</h2>
          <p className='text-gray-600'>{selectedMovie?.description}</p>
          <ul className='flex flex-wrap mb-4'>
            <li className='mr-4'>
              <span className='text-gray-600'>Year:</span> {selectedMovie?.year}
            </li>
            <li className='mr-4'>
              <span className='text-gray-600'>Rating:</span> {selectedMovie?.rating?.kp}
            </li>
            <li className='mr-4'>
              <span className='text-gray-600'>Age Rating:</span> {selectedMovie?.ageRating}
            </li>
            <li>
              <span className='text-gray-600'>Genres:</span>
              <ul className='flex flex-wrap'>
                {selectedMovie?.genres?.map((genre) => (
                  <li key={genre.id} className='mr-2'>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <button onClick = {() => handleAddToFavorites(selectedMovie)}>Добавить в избранное</button>
            </li>
          </ul>
        </div>
      </div>
      )}
        
    </>
  )
}

export default SingleMovie