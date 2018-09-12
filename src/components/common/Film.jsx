import React from 'react';
import styled from 'styled-components';

const FilmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const Film = ({ film }) => (
    <FilmWrapper>
        {film}
    </FilmWrapper>
)

export default Film;