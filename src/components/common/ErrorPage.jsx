import React from 'react';
import styled from 'styled-components';

const ErrorPageWrapper = styled.h1`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.altGray};
`;

const ErrorPage = ({ error }) => (
    <ErrorPageWrapper>
        {error}
    </ErrorPageWrapper>
);

export default ErrorPage;