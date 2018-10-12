import React from 'react';
import styled from 'styled-components';

import Title from '../common/Title';
import Subtitle from '../common/Subtitle';
import Text from '../common/Text';

const MovieDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 35%;
`;

const YearTitle = styled(Title)`
    color: ${({ theme }) => theme.lightGray};
`;

const BoldText = styled(Text)`
    font-weight: bold;
`;

const GenreList = ({ genres }) => (
    <MovieDescriptionWrapper>
        <BoldText>Genres:</BoldText>
        {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </MovieDescriptionWrapper>
);

export default GenreList;