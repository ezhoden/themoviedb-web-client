import React from 'react';
import styled from 'styled-components';

import icons from '../../constants/icons';

const FavoriteIconWrapper = styled.img`
    color: ${({ theme }) => theme.lightBlue};
    width: 32px;
    height: 32px;
`;

class FavoriteIcon extends React.Component {
    render() {
        return (
            <FavoriteIconWrapper 
                src={this.props.isFavorite ? icons.filledFavoriteIcon : icons.emptyFavoriteIcon} 
                title={this.props.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} />
        );
    }
} 

export default FavoriteIcon;