import React from 'react';
import styled from 'styled-components';
import { setFavoriteStateForMovie } from '../../services/api';
import { getSessionId, getAccountId } from '../../utils/sessionUtils';

const FavoriteWrapper = styled.span`
    color: ${({ theme }) => theme.lightBlue};
    font-size: 12px;
    justify-content: center;
    align-items: center;
    padding: 8px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

class Favorite extends React.Component {
    handleFavoriteClick = (movieId, isFavorite) => {
        setFavoriteStateForMovie(movieId, isFavorite).then((response) => {
            console.log(response);
        });
    }

    render() {
        const { isFavorite, movieId } = this.props;
        return (
            <FavoriteWrapper onClick={() => this.handleFavoriteClick(movieId, !isFavorite)}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </FavoriteWrapper>
        );
    }
}

export default Favorite;