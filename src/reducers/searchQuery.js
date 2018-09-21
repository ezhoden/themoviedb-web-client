import actionTypes from '../constants/actionTypes';

const searchQuery = (state = '', action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_QUERY:
            return action.payload;
        default:
            return state;
    }
}

export default searchQuery;