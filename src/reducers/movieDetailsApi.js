import actionTypes from '../constants/actionTypes';

const initialState = {
    details: null,
    recommendations: [],
    credits: null
};

const movieDetailsApi = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DETAILS_REQUESTED:
            return initialState;
        case actionTypes.DETAILS_SUCCEEDED:
            const { details, recommendations, credits } = action.payload;
            return {
                details,
                recommendations,
                credits
            };
        case actionTypes.DETAILS_FAILED:
            return state;
        default:
            return state;
    }
}

export default movieDetailsApi;