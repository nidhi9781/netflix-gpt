import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    var showGPT = useSelector(store => store.gpt.toggleGPTFlag);
    useNowPlayingMovies();
  return (
    <div>
        <Header />
        {
            showGPT ? <GPTSearch /> :
            <>
              <MainContainer/>
              <SecondaryContainer />
            </>
        }
        
        
        
    </div>
  )
}

export default Browse