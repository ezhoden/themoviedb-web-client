import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FilmList from './FilmList.jsx';
import { fetchTrendingFilms, searchFilms } from '../../actions/apiActions';
import { bindActionCreators } from 'redux';
import Search from './Search.jsx';

import get from 'lodash-es/get';

const MainPageWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.altGray};
`;

const mapStateToProps = (state) => ({
    apiReducer: state.apiReducer,
    searchQueryReducer: state.searchQueryReducer
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingFilms: bindActionCreators(fetchTrendingFilms, dispatch),
    searchFilms: bindActionCreators(searchFilms, dispatch)
});

class MainPage extends React.Component {
    componentDidMount() {
        this.props.fetchTrendingFilms();
        window.addEventListener('scroll', this.handleInfiniteScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleInfiniteScroll);
    }

    handleInfiniteScroll = () => {
        if (this.isScrolledToBottom()) {
            this.props.searchQueryReducer.length > 0 ?
                this.props.searchFilms({ query: this.props.searchQueryReducer, page: this.props.apiReducer.page }) :
                this.props.fetchTrendingFilms({ page: this.props.apiReducer.page })
        }
    }

    isScrolledToBottom = () => {
        const scrollTop = get(document, 'documentElement.scrollTop') || document.body.scrollTop;
        const scrollHeight = get(document, 'documentElement.scrollHeight') || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        return Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    }

    render() {
        return (
            <MainPageWrapper>
                <Search />
                <FilmList films={this.props.apiReducer.films} />
            </MainPageWrapper>
        );
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainPage);