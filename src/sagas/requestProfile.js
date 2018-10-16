import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getProfile } from '../services/api';

function* requestProfile() {
    try {
        const profile = yield call(getProfile, sessionStorage.getItem('sessionId'));
        yield put({
            type: actionTypes.PROFILE_SUCCEEDED,
            payload: {
                profile
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.PROFILE_FAILED,
            payload: {
                
            }
        });
    }
}

export function* watchProfileRequest() {
    yield takeLatest(actionTypes.PROFILE_REQUESTED, requestProfile);
}