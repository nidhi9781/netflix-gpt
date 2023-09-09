import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies  = () => {

    const dispatch = useDispatch();
    const getNowPlayingMoves = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
        const moviesJSON = await data.json();
        dispatch(addNowPlayingMovies(moviesJSON.results));
    };

    useEffect(()=>{
        getNowPlayingMoves();
    }

    ,[]);
}

export default useNowPlayingMovies;