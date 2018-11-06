import React from 'react';
import styled from 'styled-components';
import { setFavoriteStateForMovie } from '../../services/api';
import { getSessionId } from '../../utils/sessionUtils';

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

const FavoriteIcon = styled.img`
    height: 32px;
`;

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFavorite: this.props.isFavorite };
    }

    handleFavoriteClick = (movieId, isFavorite) => {
        if (getSessionId()) {
            setFavoriteStateForMovie(movieId, isFavorite).then((response) => {
                switch (response.status_code) {
                    case 1:
                        this.setState({ isFavorite: true });
                        break;
                    case 13:
                        this.setState({ isFavorite: false });
                        break;
                }
            });
        } else {
            alert('Authorization required');
        }
    }

    render() {
        const { movieId } = this.props;
        return (
            <FavoriteWrapper onClick={() => this.handleFavoriteClick(movieId, !this.state.isFavorite)}>
                <FavoriteIcon
                    isFavorite={this.state.isFavorite}
                    src={`/src/assets/star_${this.state.isFavorite ? 'filled' : 'empty'}.png`}
                    alt={this.state.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} />
            </FavoriteWrapper>
        );
    }
}

export default Favorite;