import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getMovieDetails, getMovieRecommendations, getMovieCredits } from '../services/api';

function* requestMovieDetails(request) {
    try {
        const id = request.payload.movieId;
        const details = yield call(getMovieDetails, id);
        const recommendations = yield call(getMovieRecommendations, id);
        const credits = yield call(getMovieCredits, id);
        const err = details.status_message || details.status_message || details.status_message || false;
        if (err != false) {
            throw err;
        }
        yield put({
            type: actionTypes.DETAILS_SUCCEEDED,
            payload: {
                details,
                recommendations,
                credits
            }
        });
    } catch (error) {
        yield put({
            type: actionTypes.DETAILS_FAILED,
            payload: {
                error
            }
        });
    }
}

export function* watchRequestMovieDetails() {
    yield takeLatest(actionTypes.DETAILS_REQUESTED, requestMovieDetails);
}