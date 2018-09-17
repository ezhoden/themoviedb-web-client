import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FilmList from './FilmList.jsx';
import { fetchTrendingFilms } from '../../actions/getTrendingFilms.js';
import { bindActionCreators } from 'redux';
import Search from './Search.jsx';
import FilmListTitle from './FilmListTitle.jsx';

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = (state) => ({
    films: state.films,
    search: state.search
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingFilms: bindActionCreators(fetchTrendingFilms, dispatch)
});

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchTrendingFilms();
    }

    render() {
        return (
            <MainPageWrapper>
                <Search />
                <FilmListTitle>{this.props.search.films.length}</FilmListTitle>
                <FilmList films={this.props.search.films.length ? this.props.search.films : this.props.films.films} />
            </MainPageWrapper>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);