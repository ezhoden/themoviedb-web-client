import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes.js';
import { getTrendingFilms, getSearchedFilms } from '../services/api.js'
import { requestTrendingFilms, requestTrendingFilmsSucceded, requestTrendingFilmsFailed } from '../actions/getTrendingFilms.js';
import { requestSearchFilms, requestSearchFilmsSucceded, requestSearchFilmsFailed } from '../actions/getSearchedFilms.js';

function* fetchFilms() {
    try {
        yield put(requestTrendingFilms());
        const data = yield call(() => getTrendingFilms());
        yield put(requestTrendingFilmsSucceded(data.results));
    } catch (e) {
        yield put(requestTrendingFilmsFailed(data.results));
    }
}

function* watchFetchFilms() {
    yield takeLatest(actionTypes.FETCH_TRENDING_FILMS, fetchFilms);
}

function* searchFilms(search) {
    try {
        if (search.payload.length > 0) {
            yield put(requestSearchFilms());
            const data = yield call(getSearchedFilms, search.payload);
            yield put(requestSearchFilmsSucceded(data.results));
        } else {
            yield call(fetchFilms);
        }
    } catch (e) {
        yield put(requestSearchFilmsFailed(data.results));
    }
}

function* watchSearchFilms() {
    yield takeEvery(actionTypes.FETCH_SEARCHING_FILMS, searchFilms);
}

export default function* rootSaga() {
    yield all([
        watchFetchFilms(),
        watchSearchFilms()
    ])
}