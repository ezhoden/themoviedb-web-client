import React from 'react';
import styled from 'styled-components';

import FavoriteIcon from '../common/FavoriteIcon';
import Rating from '../common/Rating';

const OptionsWrapper = styled.div`
    display: flex;
`;

const Options = ({ isFavorite, rating }) => (
    <OptionsWrapper>
        <FavoriteIcon isFavorite={isFavorite} />
        <Rating rating={rating} />
    </OptionsWrapper>
);

export default Options;