import API_KEY from '../constants/config.js'

const API_ROOT = 'https://api.themoviedb.org/3/';

const callApi = async (url) => (await fetch(API_ROOT + url + `?api_key=${API_KEY}`)).json();

export const getTrendingFilms = (type, period) => callApi(`trending/${type ? type : 'all'}/${period ? period : 'week'}`);