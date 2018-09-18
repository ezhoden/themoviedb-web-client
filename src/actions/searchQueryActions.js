import actionTypes from '../constants/actionTypes';

export const changeSearchQuery = (searchQuery) => ({ type: actionTypes.CHANGE_SEARCH_QUERY, payload: searchQuery });