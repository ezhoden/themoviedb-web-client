import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';

export const MovieCardWrapper = styled(Card)`
    width: 70%;
    height: 10%;
`;

const MovieCardImage = styled.img`
    width: 100%;
`;

const MovieInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

const MovieCardTitle = styled(Link)`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    text-decoration: none;
    color: #000;
`;

const MovieCardOverview = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    color: ${({ theme }) => theme.lightGray};
`;

const MovieCardOptions = styled.span`
    position: absolute;
`;

const MovieCard = ({ movie }) => (
    <MovieCardWrapper cardSize={console.log(movie)}>
        {/* <MovieCardImage src={movie && getImageResourcePath(movie.poster_path, API_IMG_SIZES.MID)} /> */}
        {/* <MovieInfo> */}
            {/* <MovieCardTitle to={`/movie/${ movie && movie.id}`} ></MovieCardTitle> */}
            {/* <MovieCardOverview></MovieCardOverview> */}
        {/* </MovieInfo> */}
    </MovieCardWrapper>
);

export default MovieCard;