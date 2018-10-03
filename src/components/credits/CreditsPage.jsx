import React from 'react';
import styled from 'styled-components';
import CreditList from './CreditList';

const CreditsPageWrapper = styled.div`
    background-color: ${({ theme }) => theme.altGray};
    min-height: 100vh;
    display: flex;
    padding: 32px;
`;

const CreditsPage = ({ location }) => (
            <CreditsPageWrapper>
                <CreditList credits={location.state.credits.cast}>Cast</CreditList>
                <CreditList credits={location.state.credits.crew}>Crew</CreditList>
            </CreditsPageWrapper>
        );
export default CreditsPage;