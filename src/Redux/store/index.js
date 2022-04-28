import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import {stateReducer} from "Redux/reducers/stateReducer";
import thunk from 'redux-thunk'
const reducer=combineReducers({
    stateReducer:stateReducer
})

export const store=createStore(reducer, applyMiddleware(thunk))