import {React,  useEffect } from 'react'
import { API_Options } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerMovie } from '../Utils/movieSlice';

const useTrailerMovie = (movieid) => {
    const dispatch = useDispatch();
    
    const getMainVideoTrailer = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieid +'/videos?language=en-US', API_Options);
      const trailerJson = await data.json();
  
       const filterData = trailerJson.results.filter(video => video.type === "Trailer");
       const trailer = filterData.length ? filterData[0] : trailerJson.results[0];
       dispatch(addTrailerMovie(trailer));
       
    }
  
    useEffect(()=>{
      getMainVideoTrailer();
    },[])
  
}

export default useTrailerMovie