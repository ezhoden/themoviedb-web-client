import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getMovieDetails } from '../services/api';

function* requestMovieDetails(request) {
    try {
        const details = yield call(getMovieDetails, request.payload.movieId);
        yield put({
            type: actionTypes.DETAILS_SUCCEEDED,
            payload: {
                details
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.DETAILS_FAILED,
            payload: {

            }
        });
    }
}

export function* watchRequestMovieDetails() {
    yield takeLatest(actionTypes.DETAILS_REQUESTED, requestMovieDetails);
}