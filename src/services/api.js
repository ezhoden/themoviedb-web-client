import { API_KEY, API_ROOT } from '../constants/apiConfig.js'

const callApi = async (url) => (await fetch(url)).json();

export const getTrendingFilms = (params) => {
    const link = `${API_ROOT}trending/all/week?api_key=${API_KEY}${getLink(params) || '&page=1'}`;
    return callApi(link);
}
   

export const getSearchedFilms = (params) => {
    const link = `${API_ROOT}search/movie?api_key=${API_KEY}${getLink(params)}`;
    return callApi(link);
}
    
const getLink = (params) => {
    let query = '';
    params && Object.keys(params).map((key) => {
        query += `&${key}=${params[key]}`
    });
    return query;
}