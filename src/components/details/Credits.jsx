import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HoriontalScroll from './HoriontalScroll';
import Title from '../common/Title';
import VerticalCard from '../common/VerticalCard';
import cardSizes from '../../constants/cardSizes';
import { getCardData } from '../../utils/cardDataUtils';

const CreditsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const LinkWrapper = styled(Link)`
    padding: 8px 0;
`;

const CreditsVerticalCard = styled.div`
    margin: 16px;
`;

const Credits = ({ credits, movieId }) => (
    <CreditsWrapper>
        <Title>Cast:</Title>
        <HoriontalScroll>
            {credits && credits.cast.map((actor, index) => index < 10 &&
                <CreditsVerticalCard key={index}>
                    <VerticalCard
                        cardSize={cardSizes.MEDIUM}
                        data={getCardData(actor)} />
                </CreditsVerticalCard>
            )}
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