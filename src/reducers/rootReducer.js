import { combineReducers } from 'redux';

import searchMovieApi from './searchMovieApi';
import movieDetailsApi from './movieDetailsApi';

export default combineReducers({
    searchMovieApi,
    movieDetailsApi
});