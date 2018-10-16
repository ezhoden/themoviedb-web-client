import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';
import { getRequestToken, getSessionWithLogin, getSessionId } from '../services/api';
import { saveSession } from '../utils/sessionUtils';
import { requestProfile } from '../actions/apiActions';

function* requestAuth(request) {
    try {
        const token = yield call(getRequestToken);
        const { login, password } = request.payload;
        const { success, expires_at, request_token } = yield call(getSessionWithLogin, login, password, token.request_token);
        if (success) {
            const requestToken = request_token;
            const { session_id } = yield call(getSessionId, requestToken);
            saveSession(session_id, expires_at);
            const sessionId = session_id;
            yield put({
                type: actionTypes.AUTH_SUCCEEDED,
                payload: {
                    requestToken,
                    sessionId
                }
            });
            yield put(requestProfile());
        } else {
            alert(session.status_message);
        } 
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