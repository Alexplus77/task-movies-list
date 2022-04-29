import { FETCH_DATA, SAVE_DATA_MOVIE, LOADING } from "./actionTypes";

export const handleFetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const saveDataMovie = (data) => ({
  type: SAVE_DATA_MOVIE,
  payload: data,
});
export const loading = () => ({
  type: LOADING,
});
