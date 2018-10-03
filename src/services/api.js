import { API_KEY, API_ROOT } from '../constants/apiConfig';

const callApi = async (url) => (await fetch(url)).json();

export const getTrendingMovies = (params) => 
    callApi(`${API_ROOT}/trending/movie/week?api_key=${API_KEY}${getLink(params)}`);

export const getSearchedMovies = (params) => 
    callApi(`${API_ROOT}/search/movie?api_key=${API_KEY}${getLink(params)}`);
 
export const getMovieDetails = (movieId) => 
    callApi(`${API_ROOT}/movie/${movieId}?api_key=${API_KEY}`);

export const getMovieRecommendations = (movieId) => 
    callApi(`${API_ROOT}/movie/${movieId}/recommendations?api_key=${API_KEY}`);

const getLink = (params) => {
    let link = '';
    params && Object.keys(params).map((key) => {
        link += `&${key}=${params[key]}`
    });
    return link;
}