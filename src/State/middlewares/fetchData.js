import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("movieSlice/fetchData", (page) =>
  axios.get(`${process.env.REACT_APP_API}${page}`).then(({ data }) => data)
);
