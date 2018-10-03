import React from 'react';
import styled from 'styled-components';

import Title from '../common/Title';
import Subtitle from '../common/Subtitle';
import Text from '../common/Text';
import GenreList from './GenreList';

const MovieDescriptionWrapper = styled.div`
    width: 70%;
    color: white;
    display: flex;
    flex-direction: column;
`;

const HorizontalWrapper = styled.div`
    display: flex;
`;

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const YearTitle = styled(Title)`
    color: ${({ theme }) => theme.lightGray};
`;

const BoldText = styled(Text)`
    font-weight: bold;
`;

const MovieDescription = ({ details }) => (
    <MovieDescriptionWrapper>
        <Title>{details.title} <YearTitle>({details.release_date.substr(0, 4)})</YearTitle></Title>
        <Text><BoldText>Rating: </BoldText>{details.vote_average} ({details.vote_count} votes)</Text>
        <Subtitle>Overview</Subtitle>
        <Text>{details.overview}</Text>
        <HorizontalWrapper>
            <GenreList genres={details.genres} />
            <VerticalWrapper>
                <Text><BoldText>Budget: </BoldText>{details.budget}$</Text>
                <Text><BoldText>Revenue: </BoldText>{details.revenue}$</Text>
                <Text><BoldText>Runtime: </BoldText>{details.runtime} min.</Text>
            </VerticalWrapper>
        </HorizontalWrapper>
    </MovieDescriptionWrapper>
);

export default MovieDescription;