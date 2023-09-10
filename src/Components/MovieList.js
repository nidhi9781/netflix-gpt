import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(title);
    console.log(movies);
  return (
    <div className = "p-3 ">

        <h1 className="text-xl py-3 text-white">{title}</h1>
        <div>
            
            <div className='flex  overflow-x-auto'>
            {
                    movies?.map(movie => (
                        <MovieCard key = {movie.id} posterPath = {movie.poster_path}/>
                    ))
                }
                    

            
            </div>
        </div>

    </div>
  )
}

export default MovieList