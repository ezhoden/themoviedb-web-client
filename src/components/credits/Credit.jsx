import React from 'react';
import styled from 'styled-components';

import { getImageResourcePath } from '../../utils/resourcePathUtils';
import { API_IMG_SIZES } from '../../constants/apiConfig';
import Text from '../common/Text';
import Card from '../common/Card';

const CreditWrapper = styled(Card)`
    width: 250px;

    & + & {
        margin-top: 16px;
    }
`;

const CreditNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CreditImage = styled.img`
    height: 140px;
    width: 100px;
    padding-right: 8px;
`;

const CreditName = styled(Text)`
    font-weight: bold;
`;

const Credit = ({ credit }) => (
    <CreditWrapper>
        <CreditImage src={getImageResourcePath(credit.profile_path, API_IMG_SIZES.MID)} />
        <CreditNameWrapper>
            <CreditName>{credit.name}</CreditName>
            <Text>{credit.character || credit.job}</Text>
        </CreditNameWrapper>
    </CreditWrapper>
);

export default Credit;