import React from 'react';
import styled from 'styled-components';
import Credit from './Credit';

const CreditListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
`;

const CreditList = ({ credits, children }) => (
    <CreditListWrapper>
        {`${children} (${credits.length})`}
        {credits.map((credit, index) => <Credit key={index} credit={credit} />)}
    </CreditListWrapper>
);

export default CreditList;