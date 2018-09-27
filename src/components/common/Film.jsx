import React from 'react';
import styled from 'styled-components';
import { API_IMG_ROOT, API_IMG_SIZES } from '../../constants/apiConfig.js';
import Card from '../common/Card.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FilmWrapper = styled(Card)`
    flex-direction: column;
    height: 400px;
    width: 250px;
    margin: 16px;
    cursor: pointer;
`;

const FilmPoster = styled.img`
    width: 100%;
    height: 83%;
`;

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.black};
`;

const FilmTitle = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const FilmRating = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
`;

const Film = ({ film }) => (
    <LinkWrapper to={`/movie/${film.id}`} >
        <FilmWrapper>
            <FilmPoster src={`${API_IMG_ROOT}/${API_IMG_SIZES.LARGE}/${film.poster_path}`} />
            <FilmTitle>{film.original_name || film.title}</FilmTitle>
            <FilmRating>{film.vote_average}</FilmRating>
        </FilmWrapper>
    </LinkWrapper>
)

export default Film;