import React from 'react';
import styled from 'styled-components';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';

export const VerticalCardWrapper = styled(Card)`
    flex-direction: column;
    ${({ cardSize }) => cardSize};
    cursor: ${({clickable}) => clickable && 'pointer'};
`;

const VerticalCardImage = styled.img`
    width: 100%;
`;

const TitlesWrapper = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
`;

const VerticalCardTitle = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const VerticalCardSubtitle = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    color: ${({ theme }) => theme.lightGray};
`;

const VerticalCard = ({ cardSize, data: { imageUrl, title, subtitle }, clickable }) => (
    <VerticalCardWrapper cardSize={cardSize} clickable={clickable} >
        <VerticalCardImage src={getImageResourcePath(imageUrl, API_IMG_SIZES.MID)} />
        <TitlesWrapper>
            <VerticalCardTitle>{title}</VerticalCardTitle>
            <VerticalCardSubtitle>{subtitle}</VerticalCardSubtitle>
        </TitlesWrapper>
    </VerticalCardWrapper>
);

export default VerticalCard;