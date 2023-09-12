import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const GPTSlice = createSlice(
    {
        name: "gpt",
        initialState:{
            toggleGPTFlag: false,
            gptMovieCollection:null,
            gptMovieNames : null,

        },
        reducers:{
            toggleGPTView: (state,action) => {
                state.toggleGPTFlag = !state.toggleGPTFlag
            },
            addGPTMovieToCollection:(state, action) => {
                const {moviesNames,movieResults} = action.payload;
               
                state.gptMovieCollection = movieResults;
                state.gptMovieNames = moviesNames;
            }
        }
    }

)

export const {toggleGPTView,addGPTMovieToCollection} = GPTSlice.actions;
export default GPTSlice.reducer;