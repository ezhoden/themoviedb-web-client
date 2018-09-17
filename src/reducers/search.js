import actionTypes from '../constants/actionTypes';

const initialState = {
    films: [],
    loading: false,
    error: false
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SEARCH_FILMS:
            return {
                films: [],
                loading: true,
                error: false
            };
        case actionTypes.REQUEST_SEARCH_FILMS_SUCCEEDED:
        console.log('KEEEEEEEEEK', action)
            const data = action.payload.length > 0 ? state.films.concat(action.payload) : [];
            return {
                films: data,
                loading: false,
                error: false
            };
        case actionTypes.REQUEST_SEARCH_FILMS_FAILED:
        console.log('fail')
            return {
                films: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export default search;