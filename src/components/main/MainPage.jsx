import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash-es/get';

import { requestMovie } from '../../actions/apiActions';
import MovieList from './MovieList';
import Search from './Search';

const MainPageWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.altGray};
`;

const mapStateToProps = ({ searchMovieApi }) => ({
    searchMovieApi
});

const mapDispatchToProps = (dispatch) => ({
    requestMovie: bindActionCreators(requestMovie, dispatch)
});

class MainPage extends React.Component {
    componentDidMount() {
        this.props.requestMovie();
        window.addEventListener('scroll', this.handleInfiniteScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleInfiniteScroll);
    }

    handleInfiniteScroll = () => {
        if (this.isScrolledToBottom()) {
            const { page, type, query } = this.props.searchMovieApi;
            this.props.requestMovie(page + 1, type, query);
        }
    };

    isScrolledToBottom = () => {
        const scrollTop = get(document, 'documentElement.scrollTop') || document.body.scrollTop;
        const scrollHeight = get(document, 'documentElement.scrollHeight') || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        return Math.ceil(scrollTop + clientHeight) + 1 >= scrollHeight;
    };

    render() {
        return (
            <MainPageWrapper>
                <Search />
                <MovieList movies={this.props.searchMovieApi.results} />
            </MainPageWrapper>
        );
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainPage);