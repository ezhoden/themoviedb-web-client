import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';
import Option from './Option';

export const MovieCardWrapper = styled(Card)`
    width: 70vw;
    height: 13vh;
    margin: 4px;
`;

const MovieCardImage = styled.img`
    height: 100%;
`;

const MovieInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MovieCardTitle = styled(Link)`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    text-decoration: none;
    color: #000;

    &:hover {
        text-decoration: underline;
    }
`;

const MovieCardOverview = styled.span`
    font-size: ${({ theme }) => theme.defaultTextSize};
    color: ${({ theme }) => theme.lightGray};
    overflow: hidden;
`;

const MovieCard = ({ movie, isFavorite }) => (
    <MovieCardWrapper>
        <MovieCardImage src={movie && getImageResourcePath(movie.poster_path, API_IMG_SIZES.MID)} />
        <MovieInfo>
            <MovieCardTitle to={`/movie/${movie && movie.id}`}>{movie.title}</MovieCardTitle>
            <MovieCardOverview>{movie.overview}</MovieCardOverview>
        </MovieInfo>
        <Option isFavorite={isFavorite} movieId={movie.id} rating={movie.rating} />
    </MovieCardWrapper>
);

export default MovieCard;