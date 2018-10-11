import React from 'react';
import styled from 'styled-components';

import HoriontalScroll from './HoriontalScroll';
import Title from '../common/Title';
import cardSizes from '../../constants/cardSizes';
import ClickableVerticalCard from '../common/ClickableVerticalCard';
import { getCardData } from '../../utils/cardDataUtils';

const CreditsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const Recommendations = ({ recommendations }) => (
    <CreditsWrapper>
        <Title>Recommendations:</Title>
        <HoriontalScroll>
            {recommendations && recommendations.map((movie, index) => index < 10 &&
                <ClickableVerticalCard
                    key={index}
                    cardSize={cardSizes.MEDIUM}
                    data={getCardData(movie)}
                    link={`/movie/${movie.id}`}
                    clickable={true} />
            )}
        </HoriontalScroll>
    </CreditsWrapper>
);

export default Recommendations;