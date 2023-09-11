import React from 'react'
import { BackgroundImage_URL } from '../Utils/constants'
import { lang } from '../Utils/LanguageConstants'
import { useSelector } from 'react-redux'
const GPTSearchBar = () => {
    const langConfig = useSelector((store) => store.config.langFromConfig);
  return (
    <div>
         <div className='absolute -z-20'> 
        <img src= {BackgroundImage_URL}
        alt='background' />
        </div>
   
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input type='text' placeholder= {lang[langConfig].gptSearchPlaceholder} className='p-1 m-4 col-span-9'/>
            <button className='bg-red-700 text-white rounded-lg px-4 py-2 m-4  col-span-3'> {lang[langConfig].search}</button>

        </form>

    </div>
    </div>
  )
}

export default GPTSearchBar