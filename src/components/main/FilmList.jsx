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
        {films.map((film) => <Film key={film.id} film={film.original_name || film.original_title} />)}
    </FilmListWrapper>
)

export default FilmList;