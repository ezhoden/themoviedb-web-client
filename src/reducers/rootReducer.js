import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';
import searchQuery from './searchQuery.js';

export default combineReducers({
    apiReducer,
    searchQuery
});