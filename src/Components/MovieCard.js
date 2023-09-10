import React from 'react'
import { Img_Movie_CDN } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 pr-4'>
        <img alt = "Movie Card" src = {Img_Movie_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard