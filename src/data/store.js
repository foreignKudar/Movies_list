import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./moviesSlice";
import favoritesSlice from "./favoritesSlice";

import { enableMapSet } from 'immer';

enableMapSet();

const store = configureStore({
    reducer: {
        movies: moviesSlice,
        favorites: favoritesSlice
    }
});

export default store