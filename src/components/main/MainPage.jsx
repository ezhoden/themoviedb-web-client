import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FilmList from './FilmList.jsx';
import { fetchTrendingFilms, searchFilms } from '../../actions/apiActions.js';
import { bindActionCreators } from 'redux';
import Search from './Search.jsx';
import FilmListTitle from './FilmListTitle.jsx';

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = (state) => ({
    apiReducer: state.apiReducer,
    searchQuery: state.searchQuery
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
            this.props.searchQuery.length > 0 ?
                this.props.searchFilms({ query: this.props.searchQuery, page: this.props.apiReducer.page }) :
                this.props.fetchTrendingFilms({ page: this.props.apiReducer.page })
        }
    }

    isScrolledToBottom = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        return Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    }

    render() {
        return (
            <MainPageWrapper>
                <Search />
                <FilmListTitle>{this.props.apiReducer.films.length}</FilmListTitle>
                <FilmList films={this.props.apiReducer.films} />
            </MainPageWrapper>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);