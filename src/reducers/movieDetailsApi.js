import actionTypes from '../constants/actionTypes';

const movieDetailsApi = (state = null, action) => {
    switch (action.type) {
        case actionTypes.DETAILS_REQUESTED:
            return null;
        case actionTypes.DETAILS_SUCCEEDED:
            return action.payload;
        case actionTypes.DETAILS_FAILED:
            return state;
        default:
            return state;
    }
}

export default movieDetailsApi;