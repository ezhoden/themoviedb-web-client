import React from 'react';
import styled from 'styled-components';
import { API_IMG_ROOT, API_IMG_SIZES } from '../../constants/apiConfig.js';
import Card from '../common/Card.jsx';
import { changeNavigationPath } from '../../actions/navigationActions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const FilmWrapper = styled(Card)`
    flex-direction: column;
    height: 400px;
    width: 250px;
    margin: 16px;
    cursor: pointer;
`;

const FilmPoster = styled.img`
    width: 100%;
    height: 83%;
`;

const FilmTitle = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
    padding-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const FilmRating = styled.span`
    font-size: ${({ theme }) => theme.defaultTitleSize};
`;

const mapStateToProps = (state) => ({
    navigationReducer: state.navigationReducer
});

const mapDispatchToProps = (dispatch) => ({
    changeNavigationPath: bindActionCreators(changeNavigationPath, dispatch)
});

class Film extends React.Component {
    render() {
        const film = this.props.film;
        return (
            <FilmWrapper onClick={() => this.props.changeNavigationPath(`/movie/${film.id}`)} >
                <FilmPoster src={`${API_IMG_ROOT}/${API_IMG_SIZES.LARGE}/${film.poster_path}`} />
                <FilmTitle>{film.original_name || film.title}</FilmTitle>
                <FilmRating>{film.vote_average}</FilmRating>
            </FilmWrapper>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Film);