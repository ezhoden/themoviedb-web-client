import actionTypes from '../constants/actionTypes';
import requestTypes from '../constants/requestTypes';

const initialState = {
    results: [],
    page: 1,
    loading: false,
    error: false,
    query: '',
    type: requestTypes.TRENDS
};

const searchMovieApi = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIE_REQUESTED:
            return {
                ...state,
                loading: true,
                type: action.payload.requestType
            };
        case actionTypes.MOVIE_SUCCEEDED:
            const { page, results } = action.payload;
            return {
                ...state,
                results: state.results.concat(results),
                page,
                loading: false
            };
        case actionTypes.MOVIE_FAILED:
            return {
                ...state,
                error: true
            };
        case actionTypes.SEARCH_QUERY_CHANGED:
            return {
                ...state,
                query: action.payload,
                results: []
            };
        default:
            return state;
    }
}

export default searchMovieApi;