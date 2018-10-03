import React from 'react';
import styled from 'styled-components';

import { API_IMG_SIZES } from '../../constants/apiConfig';
import { getImageResourcePath } from '../../utils/resourcePathUtils';
import Card from '../common/Card';

const ActorWrapper = styled(Card)`
    padding: 0px;
    flex-direction: column;
    height: 320px;
    min-width: 170px;
    width: 170px;

    & + & {
        margin-left: 16px;
    }
`;

const ActorImage = styled.img`
    width: 100%;
    height: 75%;
`;

const ActorName = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ActorCharacter = styled.span`
    font-size: ${({ theme }) => theme.defaultTextSize};
    color: ${({ theme }) => theme.lightGray};
    padding-left: 8px;
`;

const Actor = ({ actor }) => (
    <ActorWrapper>
        <ActorImage src={getImageResourcePath(actor.profile_path, API_IMG_SIZES.MID)} />
        <ActorName>{actor.name}</ActorName>
        <ActorCharacter>{actor.character}</ActorCharacter>
    </ActorWrapper>
);

export default Actor;