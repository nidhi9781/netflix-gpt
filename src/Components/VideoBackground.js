import React from 'react'
import useTrailerMovie from '../hooks/useTrailerMovie'
import { useSelector } from 'react-redux';


const VideoBackground = ({id}) => {
  const selector = useSelector(store => store.movies?.trailerMovies);
  useTrailerMovie(id);
  return (
    <div className='w-screen aspect-video'>
      
      <iframe  className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/dG91B3hHyY4?si=" + selector?.key + "&autoplay=1&mute=1"}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >

      </iframe>
    </div>
  )
}

export default VideoBackground