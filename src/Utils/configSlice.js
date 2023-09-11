import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        langFromConfig : "en"
    },
    reducers:{
        changeLanguage:(state,action) => {
            state.langFromConfig = action.payload
        }
    }
})
export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;