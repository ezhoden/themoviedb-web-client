import React from 'react';
import styled from 'styled-components';
import requestTypes from '../../constants/requestTypes';

const CategoriesWrapper = styled.div`
    width: 70vw;
    padding: 16px;
`;

const Category = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    font-weight: bold;
    height: 100%;
    margin-left: 16px;
    border-bottom: ${({ active, theme }) => active && theme.activeBorder};

    &:hover {
        border-bottom: ${({ active, theme }) => !active && theme.hoverBorder};
    }
`;

const Categories = ({ active, onCategoryChange }) => (
    <CategoriesWrapper>
        <Category active={active === requestTypes.FAVORITES} onClick={() => onCategoryChange(requestTypes.FAVORITES)}>Favorites</Category>
        <Category active={active === requestTypes.RATINGS} onClick={() => onCategoryChange(requestTypes.RATINGS)}>Ratings</Category>
    </CategoriesWrapper>
);

export default Categories;