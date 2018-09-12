import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Search from './Search.jsx';
import FilmList from './FilmList.jsx';
import { fetchTrendingFilms } from '../../actions/getFilms.js';
import { bindActionCreators } from 'redux';

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = (state) => ({
    films: state.films
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingFilms: bindActionCreators(fetchTrendingFilms, dispatch)
});

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchTrendingFilms();
        console.log(this.props.films)
    }

    render() {
        
        return (
            <MainPageWrapper>
                <Search />
                <FilmList films={this.props.films.films} />
            </MainPageWrapper>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);