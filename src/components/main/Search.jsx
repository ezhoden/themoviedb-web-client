import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.input`
    width: 70vw;
    padding: 8px;
    border: 1px lightgray solid;
    border-radius: 8px;
`; 

const Search = () => <SearchWrapper placeholder="Search for a movie" />

export default Search;