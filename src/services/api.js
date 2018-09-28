import { API_KEY, API_ROOT } from '../constants/apiConfig';

const callApi = async (url) => (await fetch(url)).json();

export const getTrendingFilms = (params) => callApi(`${API_ROOT}/trending/movie/week?api_key=${API_KEY}${getLink(params)}`);

export const getSearchedFilms = (params) => callApi(`${API_ROOT}/search/movie?api_key=${API_KEY}${getLink(params)}`);
    
const getLink = (params) => {
    let link = '';
    params && Object.keys(params).map((key) => {
        link += `&${key}=${params[key]}`
    });
    return link;
}