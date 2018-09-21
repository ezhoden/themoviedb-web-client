import { put, takeLatest, throttle, all, call } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes.js';
import { getTrendingFilms, getSearchedFilms } from '../services/api.js'
import * as api from '../actions/apiActions.js';

function* fetchFilms(params) {
    try {
        yield put(api.requestTrendingFilms());
        const data = yield call(() => getTrendingFilms(params ? params.payload : { page: 1 }));
        yield put(api.requestTrendingFilmsSucceded(data.results));
    } catch (e) {
        yield put(api.requestTrendingFilmsFailed(data.results));
    }
}

function* searchFilms(search) {
    try {
        if (search.payload.query.length > 0) {
            yield put(api.requestSearchFilms());
            const data = yield call(getSearchedFilms, search.payload);
            yield put(api.requestSearchFilmsSucceded(data.results));
        } else {
            yield call(fetchFilms);
        }
    } catch (e) {
        yield put(api.requestSearchFilmsFailed(data.results));
    }
}

function* newSearch(search) {
    yield put(api.requestNewFilmsSearch());
    yield call(searchFilms, search);
}

function* watchFetchFilms() {
    yield takeLatest(actionTypes.FETCH_TRENDING_FILMS, fetchFilms);
}

function* watchSearchFilms() {
    yield takeLatest(actionTypes.FETCH_SEARCHING_FILMS, searchFilms);
}

function* watchNewFilmsSearch() {
    yield throttle(1000, actionTypes.FETCH_NEW_FILMS_SEARCH, newSearch);
}

export default function* rootSaga() {
    yield all([
        watchFetchFilms(),
        watchSearchFilms(),
        watchNewFilmsSearch()
    ])
}