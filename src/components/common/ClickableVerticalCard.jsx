import React from 'react';

import VerticalCard from './VerticalCard';
import CardLinkWrapper from './CardLinkWrapper';

const ClickableVerticalCard = ({ cardSize, data: { imageUrl, title, subtitle }, link, clickable }) => (
    <CardLinkWrapper to={link}>
        <VerticalCard
            cardSize={cardSize}
            data={{ imageUrl, title, subtitle }}
            clickable={clickable} />
    </CardLinkWrapper>
);

export default ClickableVerticalCard;