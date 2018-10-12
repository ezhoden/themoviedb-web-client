import actionTypes from '../constants/actionTypes';

const initialState = {
    requestToken: null,
    sessionId: null,
    error: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_REQUESTED:
            return state;
        case actionTypes.AUTH_SUCCEEDED:
            const { requestToken, sessionId } = action.payload;
            return {
                ...state,
                requestToken,
                sessionId
            };
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default auth;