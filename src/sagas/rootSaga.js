import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes.js';
import { getTrendingFilms } from '../services/api.js'
import { requestTrendingFilms, requestTrendingFilmsSucceded } from '../actions/getFilms.js';

function* fetchFilms() {
    yield put(requestTrendingFilms());
    const data = yield call(() => getTrendingFilms());
    yield put(requestTrendingFilmsSucceded(data.results));
}

function* watchFetchFilms() {
    yield takeLatest(actionTypes.FETCH_TRENDING_FILMS, fetchFilms)
}

export default function* rootSaga() {
    yield all([
        watchFetchFilms()
    ])
}