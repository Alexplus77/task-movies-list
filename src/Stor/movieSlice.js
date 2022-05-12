import { createSlice } from "@reduxjs/toolkit";

import { fetchData, fetchDataSearch } from "./middlewares/fetchData";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    valueSearch: "",
    movieItem: null,
    loading: false,
  },
  reducers: {
    saveDataMovie: (state, action) => {
      state.movieItem = action.payload;
    },
    handleValueSearch: (state, action) => {
      state.valueSearch = action.payload;
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
    [fetchDataSearch.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loging = false;
      state.movieItem = null;
    },
  },
});
export const { saveDataMovie, handleValueSearch } = movieSlice.actions;
export default movieSlice.reducer;
