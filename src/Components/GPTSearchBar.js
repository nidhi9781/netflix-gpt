import React, { useRef } from 'react'
import { API_Options, BackgroundImage_URL } from '../Utils/constants'
import { lang } from '../Utils/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../Utils/openAI";
import { addGPTMovieToCollection } from '../Utils/GPTSlice';
const GPTSearchBar = () => {
    const langConfig = useSelector((store) => store.config.langFromConfig);
    const searchText = useRef();
    const dispatch = useDispatch();

    const SearchMovieFromTMDBAPI = async (movie) => {
       
        const api = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1';
        const data = await fetch(api, API_Options)
        var movieJson = await data.json();
        return movieJson.results;
    }

    const handleOpenAICalls = async () => {

        const gptQuery = "Act as movie recommendation agent and suggest : " + searchText.current.value + ". Give only comma seperated  movie names and no numbering "

        const movieFromGPT = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });

         const movieCollectionFromGPT = movieFromGPT.choices?.[0].message.content.split(",");
         
       
         const promiseArry = movieCollectionFromGPT.map((movieName) => SearchMovieFromTMDBAPI(movieName));

         const allMovies = await Promise.all(promiseArry);
         dispatch(addGPTMovieToCollection({moviesNames : movieCollectionFromGPT, movieResults: allMovies}));
         

    }
  return (
    <div>
        
   
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form className=' bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type='text' placeholder= {lang[langConfig].gptSearchPlaceholder} className='p-1 m-4 col-span-9'/>
            <button className='bg-red-700 text-white rounded-lg px-4 py-2 m-4  col-span-3' onClick={handleOpenAICalls}> {lang[langConfig].search}</button>

        </form>

    </div>
    </div>
  )
}

export default GPTSearchBar