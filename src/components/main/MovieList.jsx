import React from 'react';
import styled from 'styled-components';

import cardSizes from '../../constants/cardSizes';
import { getCardData } from '../../utils/cardDataUtils';
import ClickableVerticalCard from '../common/ClickableVerticalCard';

const MovieListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const MovieList = ({ movies }) => (
    <MovieListWrapper>
        {movies.map((movie, index) => 
            <ClickableVerticalCard 
                key={index} 
                cardSize={cardSizes.BIG} 
                data={getCardData(movie)} 
                link={`/movie/${movie.id}`}
                clickable={true} />
        )}
    </MovieListWrapper>
);

export default MovieList;