import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HoriontalScroll from './HoriontalScroll';
import Actor from './Actor';
import Title from '../common/Title';

const CreditsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const LinkWrapper = styled(Link)`
    padding: 8px 0;
`;

const Credits = ({ credits, movieId }) => (
    <CreditsWrapper>
        <Title>Cast:</Title>
        <HoriontalScroll>
            {credits && credits.cast.map((actor, index) => index < 10 && <Actor key={actor.cast_id} actor={actor} />)}
        </HoriontalScroll>
        <LinkWrapper to={
            {
                pathname: `/movie/${movieId}/credits`,
                state: {
                    credits: credits
                }
            }
        }>Full cast and crew</LinkWrapper>
    </CreditsWrapper>
);

export default Credits;