import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BackgroundImage_URL } from '../Utils/constants'

const GPTSearch = () => {
  return (
    
    <div>
       <div className='fixed -z-10'> 
        <img className='h-screen object-cover md:w-screen' src= {BackgroundImage_URL}
        alt='background' />
        </div>
        <div className=''>
        <GPTSearchBar />
        <GPTMovieSuggestions />
        </div>
    </div>
  )
}

export default GPTSearch