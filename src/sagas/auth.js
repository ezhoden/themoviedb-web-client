import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getRequestToken, getSessionWithLogin, getSessionId } from '../services/api';

function* requestAuth(request) {
    try {
        const token = yield call(getRequestToken);
        const { login, password } = request.payload;
        const session = yield call(getSessionWithLogin, login, password, token.request_token);
        const requestToken = session.request_token;
        const newSession = yield call(getSessionId, requestToken);
        const sessionId = newSession.session_id;
        yield put({
            type: actionTypes.AUTH_SUCCEEDED,
            payload: {
                requestToken,
                sessionId
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.AUTH_FAILED,
            payload: {

            }
        });
    }
}

export function* watchAuthRequest() {
    yield takeLatest(actionTypes.AUTH_REQUESTED, requestAuth);
}