import actionTypes from '../constants/actionTypes';

const profile = (state = null, action) => {
    switch (action.type) {
        case actionTypes.PROFILE_REQUESTED:
            return state;
        case actionTypes.PROFILE_SUCCEEDED:
            return action.payload.profile;
        case actionTypes.PROFILE_FAILED:
            return state;
        case actionTypes.PROFILE_REMOVED:
            return null;
        default:
            return state;
    }
}

export default profile;