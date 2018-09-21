import React from 'react';
import styled from 'styled-components';
import Film from '../common/Film.jsx';

const FilmListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const FilmList = ({ films }) => (
    <FilmListWrapper>
        {films.map((film, index) => <Film key={index} film={film} />)}
    </FilmListWrapper>
)

export default FilmList;