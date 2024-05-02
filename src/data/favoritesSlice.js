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
        },
        deleteFavorite: (state, {payload}) => {
            state.favorites.splice(state.favorites.findIndex(favorite => favorite.id === payload), 1)
        }
    }
})

export const { addToFavorites, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;