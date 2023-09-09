import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerMovies : null,
    },
    reducers :
    {
        addNowPlayingMovies:(state, action) => {
                state.nowPlayingMovies = action.payload;
        },
        addTrailerMovie:(state, action) => {
                state.trailerMovies = action.payload;
        }
    },
})
export const { addNowPlayingMovies,addTrailerMovie } = movieSlice.actions;

export default movieSlice.reducer;