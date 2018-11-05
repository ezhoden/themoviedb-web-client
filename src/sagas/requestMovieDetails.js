import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getMovieDetails, getMovieRecommendations, getMovieCredits, getAccountStates } from '../services/api';
import { getSessionId } from '../utils/sessionUtils';

function* requestMovieDetails(request) {
    try {
        const id = request.payload.movieId;
        const details = yield call(getMovieDetails, id);
        const recommendations = yield call(getMovieRecommendations, id);
        const credits = yield call(getMovieCredits, id);
        const err = details.status_message || false;
        const sessionId = getSessionId();
        const accountStates = yield sessionId && call(getAccountStates, id, sessionId);
        if (err != false) {
            throw err;
        }
        yield put({
            type: actionTypes.DETAILS_SUCCEEDED,
            payload: {
                details,
                recommendations,
                credits,
                accountStates
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