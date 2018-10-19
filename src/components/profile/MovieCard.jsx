import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';
import Options from './Options';

export const MovieCardWrapper = styled(Card)`
    width: 70vw;
    height: 25vh;
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
`;

const OptionsWrapper = styled.span`
    position: absolute;
    bottom: 12px;
`;

const MovieCard = ({ movie }) => (
    <MovieCardWrapper>
        <MovieCardImage src={movie && getImageResourcePath(movie.poster_path, API_IMG_SIZES.MID)} />
        <MovieInfo>
            <MovieCardTitle to={`/movie/${movie && movie.id}`}>{movie.title}</MovieCardTitle>
            <MovieCardOverview>{movie.overview}</MovieCardOverview>
            <OptionsWrapper>
                <Options  />
            </OptionsWrapper>
        </MovieInfo>
    </MovieCardWrapper>
);

export default MovieCard;