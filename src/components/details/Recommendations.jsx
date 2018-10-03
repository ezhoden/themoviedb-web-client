import React from 'react';
import styled from 'styled-components';

import HoriontalScroll from './HoriontalScroll';
import Movie from './Movie';
import Title from '../common/Title';

const CreditsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const Recommendations = ({ recommendations }) => (
    <CreditsWrapper>
        <Title>Recommendations:</Title>
        <HoriontalScroll>
            {recommendations && recommendations.map((movie, index) => index < 10 && <Movie key={movie.id} movie={movie} />)}
        </HoriontalScroll>
    </CreditsWrapper>
);

export default Recommendations;