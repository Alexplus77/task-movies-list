import { createSlice } from "@reduxjs/toolkit";

import { fetchData } from "./middlewares/fetchData";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    movieItem: null,
    loading: false,
  },
  reducers: {
    saveDataMovie: (state, action) => {
      state.movieItem = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loging = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loging = false;
      state.movieItem = null;
    },
  },
});
export const { saveDataMovie } = movieSlice.actions;
export default movieSlice.reducer;
