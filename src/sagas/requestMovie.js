import { put, throttle, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getTrendingMovies, getSearchedMovies, getFavorites, getRatings } from '../services/api';
import requestTypes from '../constants/requestTypes';

function* getMovies(params) {
    const { page, requestType, query } = params;
    console.log(params)
    const sessionId = sessionStorage.getItem('sessionId')
    switch (requestType) {
        case requestTypes.TRENDS:
            return yield call(getTrendingMovies, { page });
        case requestTypes.SEARCH:
            return yield call(getSearchedMovies, { page, query });
        case requestTypes.FAVORITES:
            return yield call(getFavorites, page, sessionId, accountId);
        case requestTypes.RATINGS:
            return yield call(getRatings, page, sessionId, accountId);
    }
}

function* requestMovie(request) {
    try {
        const response = yield call(getMovies, request.payload);
        const { page, results } = response;
        yield put({
            type: actionTypes.MOVIE_SUCCEEDED,
            payload: {
                page,
                results
            }
        });
    } catch (e) {
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