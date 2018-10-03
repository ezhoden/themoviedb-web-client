import { put, throttle, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getTrendingMovies, getSearchedMovies } from '../services/api';
import requestTypes from '../constants/requestTypes';

function* getMovies(params) {
    const { page, requestType, query } = params;
        switch(requestType) {
            case requestTypes.TRENDS:
                return yield call(getTrendingMovies, { page });
            case requestTypes.SEARCH:
                return yield call(getSearchedMovies, { page, query });
        }
}

function* requestMovie(request) {
    try {
        const { page, results } = yield call(getMovies, request.payload);
        yield put({
            type: actionTypes.MOVIE_SUCCEEDED,
            payload: {
                page,
                results
            }
        });
    } catch(e) {
        yield put({
            type: actionTypes.MOVIE_FAILED,
            payload: {

            }
        });
    }   
}

export function* watchRequestMovie() {
    yield throttle(1000, actionTypes.MOVIE_REQUESTED, requestMovie);
}