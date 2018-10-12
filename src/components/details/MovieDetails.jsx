import React from 'react';
import styled from 'styled-components';

import { getImageResourcePath } from '../../utils/resourcePathUtils';
import MovieDescription from './MovieDescription';

const MovieDetailsWrapper = styled.div`
    width: 100vw;
    min-height: 50vh;
    background-image: url(${({ backdrop }) => backdrop});
    background-size: cover;
`;

const MovieDetailsWrapperSolid = styled.div`
    background: linear-gradient(to right, rgba(16, 0, 16, 0.7), rgba(16, 0, 16, 0.8));
    height: 100%;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const MoviePoster = styled.img`
    height: 50vh;
    padding: 32px;
`;

const MovieDetails = ({ movie }) => movie.details && (
    <MovieDetailsWrapper backdrop={getImageResourcePath(movie.details.backdrop_path)} >
        <MovieDetailsWrapperSolid>
            <MoviePoster src={getImageResourcePath(movie.details.poster_path)} />
            <MovieDescription details={movie.details} />
        </MovieDetailsWrapperSolid>
    </MovieDetailsWrapper>

);

export default MovieDetails;