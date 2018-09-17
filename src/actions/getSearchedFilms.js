import actionTypes from '../constants/actionTypes';

export const searchFilms = (search) => ({ type: actionTypes.FETCH_SEARCHING_FILMS, payload: search });

export const requestSearchFilms = () => ({ type: actionTypes.REQUEST_SEARCH_FILMS });

export const requestSearchFilmsSucceded = (data) => ({ type: actionTypes.REQUEST_SEARCH_FILMS_SUCCEEDED, payload: data });

export const requestSearchFilmsFailed = () => ({ type: actionTypes.REQUEST_SEARCH_FILMS_FAILED });