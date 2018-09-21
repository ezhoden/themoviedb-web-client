import actionTypes from '../constants/actionTypes';

const initialState = {
    films: [],
    page: 1,
    loading: false,
    error: false
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_TRENDING_FILMS:
            return {
                films: state.films,
                page: state.page,
                loading: true,
                error: false
            };
        case actionTypes.REQUEST_TRENDING_FILMS_SUCCEEDED:
            return {
                films: state.films.concat(action.payload),
                page: state.page + 1,
                loading: false,
                error: false
            };
        case actionTypes.REQUEST_TRENDING_FILMS_FAILED:
            return {
                films: state.films,
                page: state.page,
                loading: false,
                error: true
            };
        case actionTypes.REQUEST_SEARCH_FILMS:
            return {
                films: state.films,
                page: state.page,
                loading: true,
                error: false
            };
        case actionTypes.REQUEST_SEARCH_FILMS_SUCCEEDED:
            const data = action.payload.length > 0 ? state.films.concat(action.payload) : state.films;
            return {
                films: data,
                page: state.page + 1,
                loading: false,
                error: false
            };
        case actionTypes.REQUEST_SEARCH_FILMS_FAILED:
            return {
                films: state.films,
                page: state.page,
                loading: false,
                error: true
            };
        case actionTypes.REQUEST_NEXT_PAGE:
            return {
                films: state.films,
                page: state.page + 1,
                loading: state.loading,
                error: state.error
            };
        case actionTypes.FETCH_NEW_FILMS_SEARCH:
            return {
                films: [],
                page: 1,
                loading: state.loading,
                error: state.error
            };
        default:
            return state;
    }
}

export default apiReducer;