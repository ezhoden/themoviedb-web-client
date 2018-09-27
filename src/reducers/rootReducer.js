import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';
import searchQueryReducer from './searchQueryReducer.js';

export default combineReducers({
    apiReducer,
    searchQueryReducer
});