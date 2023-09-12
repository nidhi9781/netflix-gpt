import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {gptMovieNames, gptMovieCollection} = useSelector((store)=> store.gpt)
  console.log(gptMovieNames);
  console.log(gptMovieCollection);
  if(!gptMovieNames) return;
  

  return (
    <div className='bg-black p-4 m-4 opacity-90'>
        {
          gptMovieNames.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={gptMovieCollection[index]} />) 
        }
    </div>
  )
}

export default GPTMovieSuggestions