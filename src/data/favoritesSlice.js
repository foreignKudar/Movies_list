import { createSlice } from "@reduxjs/toolkit";



const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites: (state, {payload}) => {
            state.favorites = state.favorites.filter(item => item.id !== payload.id)
            state.favorites.push(payload)
        }
    }
})

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;