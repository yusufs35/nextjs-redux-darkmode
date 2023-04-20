import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: "theme",
    initialState:{
        darkMode: true,
    },
    reducers:{
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});

export const { setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;