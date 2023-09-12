import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const moviesStore = useSelector(store => store.movies?.nowPlayingMovies);
    if(!moviesStore) return;
    const mainMovie = moviesStore[0];
    const {original_title,overview,id } = mainMovie;
    return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title = {original_title} overview= {overview} />
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer