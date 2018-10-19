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
            const { query, requestType } = action.payload;
            return {
                ...state,
                query,
                loading: true,
                type: requestType,
                results: query === state.query ? state.results : []
            };
        case actionTypes.MOVIE_SUCCEEDED:
            const { page, results } = action.payload;
            return {
                ...state,
                results: page === 1 ? results : state.results.concat(results),
                page,
                loading: false
            };
        case actionTypes.MOVIE_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default searchMovieApi;