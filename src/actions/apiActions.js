import actionTypes from '../constants/actionTypes';
import requestTypes from '../constants/requestTypes';

export const requestMovie = (page = 1, requestType = requestTypes.TRENDS, query = '', accountId) => ({
    type: actionTypes.MOVIE_REQUESTED,
    payload: {
        page,
        requestType,
        query,
        accountId
    }
});

export const requestDetails = (movieId) => ({
    type: actionTypes.DETAILS_REQUESTED,
    payload: {
        movieId
    }
});

export const requestAuth = (login, password) => ({
    type: actionTypes.AUTH_REQUESTED,
    payload: {
        login,
        password
    }
});

export const requestProfile = () => ({
    type: actionTypes.PROFILE_REQUESTED
});

export const removeProfile = () => ({
    type: actionTypes.PROFILE_REMOVED
});