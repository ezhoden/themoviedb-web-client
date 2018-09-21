import React from 'react';
import styled from 'styled-components';
import { API_IMG_ROOT, API_IMG_SIZES } from '../../constants/apiConfig.js';
import Card from '../common/Card.jsx';

const FilmWrapper = styled(Card)`
    flex-direction: column;
    height: 400px;
    width: 250px;
    margin: 16px;
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