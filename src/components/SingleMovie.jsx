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
        <div className="max-w-4xl h-max mx-auto bg-white rounded-lg shadow-md overflow-hidden flex mb-14">
          <div className="h-48 w-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${selectedMovie?.poster?.url})` }} />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{selectedMovie?.name}</h2>
            <p className="text-gray-600">{selectedMovie?.description}</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mr-4">
                <span className="text-gray-600">Год:</span> {selectedMovie?.year}
              </li>
              <li className="mr-4">
                <span className="text-gray-600">Рейтинг:</span> {selectedMovie?.rating?.kp}
              </li>
              <li className="mr-4">
                <span className="text-gray-600">Возрастное ограничение:</span> {selectedMovie?.ageRating}
              </li>
              <li>
                <span className="text-gray-600 flex">Жанры:{selectedMovie?.genres?.map((genre) => (
                    <li key={genre.id} className="mr-2">
                      {genre.name}
                    </li>
                  ))}</span>
                <ul className="flex flex-wrap">

                </ul>
              </li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddToFavorites(selectedMovie)}>Добавить в избранное</button>
          </div>
      </div>
      )}
        
    </>
  )
}

export default SingleMovie