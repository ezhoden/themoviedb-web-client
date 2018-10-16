import { combineReducers } from 'redux';

import searchMovieApi from './searchMovieApi';
import movieDetailsApi from './movieDetailsApi';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    searchMovieApi,
    movieDetailsApi,
    auth,
    profile
});