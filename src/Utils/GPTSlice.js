import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const GPTSlice = createSlice(
    {
        name: "gpt",
        initialState:{
            toggleGPTFlag: false,

        },
        reducers:{
            toggleGPTView: (state,action) => {
                state.toggleGPTFlag = !state.toggleGPTFlag
            },
        }
    }

)

export const {toggleGPTView} = GPTSlice.actions;
export default GPTSlice.reducer;