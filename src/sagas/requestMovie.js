import { put, takeLatest, throttle, all, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getTrendingFilms, getSearchedFilms } from '../services/api';
import requestTypes from '../constants/requestTypes';

function* requestMovie(request) {
    try {
        const { page, requestType, query} = request.payload;
        let data;
        switch(requestType) {
            case requestTypes.TRENDS:
                data = yield call(getTrendingFilms, { page });
                break;
            case requestTypes.SEARCH:
                data = yield call(getSearchedFilms, { page, query });
                break;
        }
        yield put({
            type: actionTypes.MOVIE_SUCCEEDED,
            payload: {
                page: data.page,
                results: data.results
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