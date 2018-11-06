import React from 'react';
import styled from 'styled-components';

import HoriontalScroll from './HoriontalScroll';
import Title from '../common/Title';
import cardSizes from '../../constants/cardSizes';
import ClickableVerticalCard from '../common/ClickableVerticalCard';
import { getVerticalCardData } from '../../utils/cardDataUtils';

const CreditsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const Recommendations = ({ recommendations }) => (
    <CreditsWrapper>
        <Title>{recommendations && recommendations.length > 0 && 'Recommendations:'}</Title>
        <HoriontalScroll>
            {recommendations && recommendations.map((movie, index) => index < 10 &&
                <ClickableVerticalCard
                    key={index}
                    cardSize={cardSizes.MEDIUM}
                    data={getVerticalCardData(movie)}
                    link={`/movie/${movie.id}`}
                    clickable={true} />
            )}
        </HoriontalScroll>
    </CreditsWrapper>
);

export default Recommendations;