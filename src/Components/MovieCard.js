import React from 'react'
import { Img_Movie_CDN } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return;
  return (
    <div className=' w-20 md:w-48 '>
        <img alt = "Movie Card" src = {Img_Movie_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard