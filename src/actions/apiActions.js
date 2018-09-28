import actionTypes from '../constants/actionTypes';
import requestTypes from '../constants/requestTypes';

export const requestMovie = (page = 1, requestType = requestTypes.TRENDS, query = '') => ({
    type: actionTypes.MOVIE_REQUESTED,
    payload: {
        page,
        requestType,
        query
    }
});
