import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash-es';

import cardSizes from '../../constants/cardSizes';
import { getVerticalCardData } from '../../utils/cardDataUtils';
import ClickableVerticalCard from '../common/ClickableVerticalCard';

const MovieListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

class MovieList extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleInfiniteScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleInfiniteScroll);
    }

    handleInfiniteScroll = () => {
        if (this.isScrolledToBottom()) {
            this.props.handleMovieRequesting();
        }
    }

    isScrolledToBottom = () => {
        const scrollTop = get(document, 'documentElement.scrollTop') || document.body.scrollTop;
        const scrollHeight = get(document, 'documentElement.scrollHeight') || document.body.scrollHeight;
        const clientHeight = get(document, 'documentElement.clientHeight') || window.innerHeight;
        return Math.ceil(scrollTop + clientHeight) + 1 >= scrollHeight;
    }

    render() {
        return (
            <MovieListWrapper>
                {this.props.movies}
            </MovieListWrapper>
        );
    }
} 

export default MovieList;