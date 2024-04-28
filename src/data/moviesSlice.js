import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async () => {

     const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&year=2024', {
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'MBMVEA3-DW345CE-H7GQ33H-SQJC3Y4'
        }, })
        return response.data

        
    }
)

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        error: null,
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder
          .addCase(getMovies.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getMovies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.movies = action.payload;
          })
          .addCase(getMovies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
})

export default moviesSlice.reducer;