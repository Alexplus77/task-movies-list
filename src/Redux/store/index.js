import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { movieReducer } from "Redux/reducers/movieReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  movieReducer: movieReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
