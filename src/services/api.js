import { API_KEY, API_ROOT } from '../constants/apiConfig';
import { getAccountId, getSessionId } from '../utils/sessionUtils';

const callApi = async (url) => (await fetch(url)).json();

const callPostWithBody = async (url, body) => (await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
})).json();

export const getTrendingMovies = (params) =>
    callApi(`${API_ROOT}/trending/movie/week?api_key=${API_KEY}${getLink(params)}`);

export const getSearchedMovies = (params) =>
    callApi(`${API_ROOT}/search/movie?api_key=${API_KEY}${getLink(params)}`);

export const getMovieDetails = (movieId) =>
    callApi(`${API_ROOT}/movie/${movieId}?api_key=${API_KEY}`);

export const getMovieRecommendations = (movieId) =>
    callApi(`${API_ROOT}/movie/${movieId}/recommendations?api_key=${API_KEY}`);

export const getMovieCredits = (movieId) =>
    callApi(`${API_ROOT}/movie/${movieId}/credits?api_key=${API_KEY}`);

export const getRequestToken = () =>
    callApi(`${API_ROOT}/authentication/token/new?api_key=${API_KEY}`);

export const getSessionWithLogin = (username, password, request_token) =>
    callPostWithBody(
        `${API_ROOT}/authentication/token/validate_with_login?api_key=${API_KEY}`,
        { username, password, request_token }
    );

export const getSession = (request_token) =>
    callPostWithBody(
        `${API_ROOT}/authentication/session/new?api_key=${API_KEY}`,
        { request_token }
    );

export const getProfile = () =>
    callApi(`${API_ROOT}/account?api_key=${API_KEY}&session_id=${getSessionId()}`);

export const getFavorites = (page) =>
    callApi(`${API_ROOT}/account/${getAccountId()}/favorite/movies?api_key=${API_KEY}&session_id=${getSessionId()}&page=${page}`);

export const getRatings = (page) =>
    callApi(`${API_ROOT}/account/${getAccountId()}/rated/movies?api_key=${API_KEY}&session_id=${getSessionId()}&page=${page}`);

export const getAccountStates = (movieId) =>
    callApi(`${API_ROOT}/movie/${movieId}/account_states?api_key=${API_KEY}&session_id=${getSessionId()}`);

export const setFavoriteStateForMovie = (media_id, favorite) =>
    callPostWithBody(
        `${API_ROOT}/account/${getAccountId()}/favorite?api_key=${API_KEY}&session_id=${getSessionId()}`,
        { media_type: "movie", media_id, favorite }
    );

export const rateMovie = (movieId, value) =>
    callPostWithBody(
        `${API_ROOT}/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${getSessionId()}`,
        { value }
    );

const getLink = (params) => {
    let link = '';
    params && Object.keys(params).map((key) => {
        link += `&${key}=${params[key]}`
    });
    return link;
}