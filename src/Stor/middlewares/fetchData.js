import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("movieSlice/fetchData", (page) =>
  axios.get(`${process.env.REACT_APP_API}${page}`).then(({ data }) => data)
);
export const fetchDataSearch = createAsyncThunk(
  "movieSlice/fetchDataSearch",
  ({ debounceValue, page }) =>
    axios
      .get(`${process.env.REACT_APP_SEARCH_API}${debounceValue}&page=${page}`)
      .then(({ data }) => data)
      .catch((e) => console.log("error", e))
);
