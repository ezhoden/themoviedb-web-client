import React from 'react';
import styled from 'styled-components';

import Favorite from '../common/Favorite';
import Rating from '../common/Rating';

const OptionWrapper = styled.div`
    display: flex;
`;

const Option = ({ isFavorite, rating, movieId }) => (
    <OptionWrapper>
        {isFavorite !== undefined && <Favorite isFavorite={isFavorite} movieId={movieId} />}
        {rating && <Rating rating={rating} movieId={movieId} />}
    </OptionWrapper>
);

export default Option;