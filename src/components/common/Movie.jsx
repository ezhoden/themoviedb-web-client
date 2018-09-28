import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { API_IMG_ROOT, API_IMG_SIZES } from '../../constants/apiConfig';
import Card from '../common/Card';

const MovieWrapper = styled(Card)`
    flex-direction: column;
    height: 400px;
    width: 250px;
    margin: 16px;
    cursor: pointer;
`;

const MoviePoster = styled.img`
    width: 100%;
    height: 83%;
`;

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.black};
`;

const MovieTitle = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MovieRating = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
`;

const Movie = ({ movie }) => (
    <LinkWrapper to={`/movie/${movie.id}`} >
        <MovieWrapper>
            <MoviePoster src={`${API_IMG_ROOT}/${API_IMG_SIZES.LARGE}/${movie.poster_path}`} />
            <MovieTitle>{movie.original_name || movie.title}</MovieTitle>
            <MovieRating>{movie.vote_average}</MovieRating>
        </MovieWrapper>
    </LinkWrapper>
)

export default Movie;