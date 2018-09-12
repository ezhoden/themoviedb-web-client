import actionTypes from '../constants/actionTypes';

const initialState = {
    films: [],
    loading: false,
    error: false,
  };

const films = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_TRENDING_FILMS:
            return {
                films: [],
                loading: true,
                error: false,
            };
        case actionTypes.REQUEST_TRENDING_FILMS_SUCCEEDED:
            return {
                films: action.payload,
                loading: false,
                error: false,
            };
        case actionTypes.REQUEST_TRENDING_FILMS_FAILED:
            return {
                films: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}

export default films;