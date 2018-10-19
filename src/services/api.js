import { API_KEY, API_ROOT } from '../constants/apiConfig';

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

export const getSessionId = (request_token) =>
    callPostWithBody(
        `${API_ROOT}/authentication/session/new?api_key=${API_KEY}`,
        { request_token }
    );

export const getProfile = (sessionId) =>
    callApi(`${API_ROOT}/account?api_key=${API_KEY}&session_id=${sessionId}`);

export const getFavorites = (page, sessionId, accountId) =>
    callApi(`${API_ROOT}/account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`);

export const getRatings = (page, sessionId, accountId) =>
    callApi(`${API_ROOT}/account/${accountId}/rated/movies?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`);

export const getAccountStates = (movieId, sessionId) =>
    callApi(`${API_ROOT}/movie/${movieId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`);

const getLink = (params) => {
    let link = '';
    params && Object.keys(params).map((key) => {
        link += `&${key}=${params[key]}`
    });
    return link;
}