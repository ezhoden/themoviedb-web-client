import React from 'react';
import styled from 'styled-components';

import Movie from '../common/Movie';

const MovieListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const MovieList = ({ movies }) => (
    <MovieListWrapper>
        {movies.map((movie, index) => <Movie key={index} movie={movie} />)}
    </MovieListWrapper>
);

export default MovieList;