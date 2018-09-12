import { combineReducers } from 'redux';
import search from './search.js';
import films from './films.js';

export default combineReducers({
    search,
    films
});