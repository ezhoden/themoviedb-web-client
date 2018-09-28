import actionTypes from '../constants/actionTypes';
import requestTypes from '../constants/requestTypes';

export const searchQueryChanged = (query) => ({ 
    type: actionTypes.SEARCH_QUERY_CHANGED, 
    payload: query 
});

export const requestMovie = (page = 1, requestType = requestTypes.TRENDS, query = '') => ({
    type: actionTypes.MOVIE_REQUESTED,
    payload: {
        page,
        requestType,
        query
    }
});
