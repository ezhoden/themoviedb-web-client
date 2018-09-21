import actionTypes from '../constants/actionTypes';

export const fetchNewFilmsSearch = (params) => ({ type: actionTypes.FETCH_NEW_FILMS_SEARCH, payload: params });

export const requestNewFilmsSearch = (params) => ({ type: actionTypes.REQUEST_NEW_FILMS_SEARCH, payload: params });

export const searchFilms = (params) => ({ type: actionTypes.FETCH_SEARCHING_FILMS, payload: params });

export const requestSearchFilms = () => ({ type: actionTypes.REQUEST_SEARCH_FILMS });

export const requestSearchFilmsSucceded = (data) => ({ type: actionTypes.REQUEST_SEARCH_FILMS_SUCCEEDED, payload: data });

export const requestSearchFilmsFailed = () => ({ type: actionTypes.REQUEST_SEARCH_FILMS_FAILED });

export const fetchTrendingFilms = (params) => ({ type: actionTypes.FETCH_TRENDING_FILMS, payload: params });

export const requestTrendingFilms = () => ({ type: actionTypes.REQUEST_TRENDING_FILMS });

export const requestTrendingFilmsSucceded = (data) => ({ type: actionTypes.REQUEST_TRENDING_FILMS_SUCCEEDED, payload: data });

export const requestTrendingFilmsFailed = () => ({ type: actionTypes.REQUEST_TRENDING_FILMS_FAILED });

export const requestNextPage = () => ({ type: actionTypes.REQUEST_NEXT_PAGE });