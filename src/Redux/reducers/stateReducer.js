import {
  FITCH_DATA,
  SAVE_DATA_MOVIE,
  LOADING,
} from "Redux/actions/actionTypes";

const initialState = {
  movies: [],
  movieItem: null,
  loading: false,
};
export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FITCH_DATA:
      return {
        ...state,
        movies: action.payload,
        movieItem: null,
        loading: false,
      };
    case SAVE_DATA_MOVIE:
      return { ...state, movieItem: action.payload };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
