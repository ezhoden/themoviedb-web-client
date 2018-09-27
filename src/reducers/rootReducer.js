import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';
import searchQueryReducer from './searchQueryReducer.js';
import navigationReducer from './navigationReducer.js';

export default combineReducers({
    apiReducer,
    searchQueryReducer,
    navigationReducer
});