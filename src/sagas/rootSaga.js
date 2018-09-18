import { put, takeLatest, throttle, all, call } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes.js';
import { getTrendingFilms, getSearchedFilms } from '../services/api.js'
import * as api from '../actions/apiActions.js';

function* fetchFilms(params) {
    try {
        yield put(api.requestTrendingFilms());
        const data = yield call(() => getTrendingFilms(params.payload));
        yield put(api.requestTrendingFilmsSucceded(data.results));
    } catch (e) {
        console.log(e)
        yield put(api.requestTrendingFilmsFailed(data.results));
    }
}

function* watchFetchFilms() {
    yield takeLatest(actionTypes.FETCH_TRENDING_FILMS, fetchFilms);
}

function* searchFilms(search) {
    try {
        if (search.payload.length > 0) {
            yield put(api.requestSearchFilms());
            const data = yield call(getSearchedFilms, { query: search.payload });
            console.log(data)
            yield put(api.requestSearchFilmsSucceded(data.results));
        } else {
            yield call(fetchFilms);
        }
    } catch (e) {
        yield put(api.requestSearchFilmsFailed(data.results));
    }
}

function* watchSearchFilms() {
    yield throttle(1000, actionTypes.FETCH_SEARCHING_FILMS, searchFilms);
}

export default function* rootSaga() {
    yield all([
        watchFetchFilms(),
        watchSearchFilms()
    ])
}