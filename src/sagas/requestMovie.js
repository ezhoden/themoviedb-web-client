import { put, throttle, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getTrendingMovies, getSearchedMovies, getFavorites, getRatings, getProfile } from '../services/api';
import requestTypes from '../constants/requestTypes';
import { getSessionId } from '../utils/sessionUtils';

function* getMovies(params) {
    const { page, requestType, query } = params;
    switch (requestType) {
        case requestTypes.TRENDS:
            return yield call(getTrendingMovies, { page });
        case requestTypes.SEARCH:
            return yield call(getSearchedMovies, { page, query });
        case requestTypes.FAVORITES:
            return yield call(getFavorites, page);
        case requestTypes.RATINGS:
            return yield call(getRatings, page);
    }
}

function* requestMovie(request) {
    try {
        if (request.payload.requestType === requestTypes.FAVORITES || request.requestType === requestTypes.RATINGS) {
            const profile = yield call(getProfile, getSessionId());
            request.payload.accountId = profile.id;
        }
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