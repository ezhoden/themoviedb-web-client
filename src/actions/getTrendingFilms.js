import actionTypes from '../constants/actionTypes';

export const fetchTrendingFilms = () => ({ type: actionTypes.FETCH_TRENDING_FILMS });

export const requestTrendingFilms = () => ({ type: actionTypes.REQUEST_TRENDING_FILMS });

export const requestTrendingFilmsSucceded = (data) => ({ type: actionTypes.REQUEST_TRENDING_FILMS_SUCCEEDED, payload: data });

export const requestTrendingFilmsFailed = () => ({ type: actionTypes.REQUEST_TRENDING_FILMS_FAILED });