import React from 'react';
import styled from 'styled-components';
import { API_IMG_ROOT, API_IMG_SIZES } from '../../constants/apiConfig.js';

const FilmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 250px;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const FilmPoster = styled.img`
    
`;

const FilmTitle = styled.span`
    font-size: 18px;
    padding-top: 8px;
`;

const FilmRating = styled.span`
    font-size: 18px;
`;

const Film = ({ film }) => (
    <FilmWrapper>
        <FilmPoster src={`${API_IMG_ROOT}/${API_IMG_SIZES.MID}/${film.poster_path}`} />
        <FilmTitle>{film.original_name || film.title}</FilmTitle>
        <FilmRating>{film.vote_average}</FilmRating>
    </FilmWrapper>
);

export default Film;