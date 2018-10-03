import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';

const MovieWrapper = styled(Card)`
    padding: 0px;
    flex-direction: column;
    height: 320px;
    min-width: 170px;
    width: 170px;
    
    & + & {
        margin-left: 16px;
    }
`;

const LinkWrapper = styled(Link)`
    margin: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.black};
`;

const MovieImage = styled.img`
    width: 100%;
    height: 75%;
`;

const MovieName = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MovieCharacter = styled.span`
    font-size: ${({ theme }) => theme.defaultTextSize};
    color: ${({ theme }) => theme.lightGray};
    padding-left: 8px;
`;

const Movie = ({ movie }) => (
    <LinkWrapper to={`/movie/${movie.id}`}>
        <MovieWrapper>
            <MovieImage src={getImageResourcePath(movie.poster_path, API_IMG_SIZES.MID)} />
            <MovieName>{movie.title} ({movie.release_date.substr(0, 4)})</MovieName>
            <MovieCharacter>{movie.rating}</MovieCharacter>
        </MovieWrapper>
    </LinkWrapper>
);

export default Movie;