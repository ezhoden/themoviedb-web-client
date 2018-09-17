import { API_KEY, API_ROOT } from '../constants/apiConfig.js'

const callApi = async (url) => (await fetch(url)).json();

export const getTrendingFilms = (type = 'all', period = 'week') => 
    callApi(`${API_ROOT}trending/${type}/${period}?api_key=${API_KEY}`);

export const getSearchedFilms = (search) => {
    const link = `${API_ROOT}search/movie?api_key=${API_KEY}&query=${search}`;
    console.log(link)
    return callApi(link);
}
    
const getLink = (params) => {

}