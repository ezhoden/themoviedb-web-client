import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalProvider } from 'styled-react-modal';

import { requestMovie } from '../../actions/apiActions';
import MovieList from '../common/MovieList';
import Search from './Search';
import AuthMenu from './AuthMenu';
import { isExpiredSession, deleteSession } from '../../utils/sessionUtils';
import { getVerticalCardData } from '../../utils/cardDataUtils';
import cardSizes from '../../constants/cardSizes';
import ClickableVerticalCard from '../common/ClickableVerticalCard';

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
        isExpiredSession() && deleteSession();
    }

    requestMoreMovies = () => {
        const { page, type, query } = this.props.searchMovieApi;
        this.props.requestMovie(page + 1, type, query);
    }

    render() {
        const movies = this.props.searchMovieApi.results.map((movie, index) =>
            <ClickableVerticalCard
                key={index}
                cardSize={cardSizes.BIG}
                data={getVerticalCardData(movie)}
                link={`/movie/${movie.id}`}
                clickable={true} />
        );
        return (
            <MainPageWrapper>
                <ModalProvider>
                    <AuthMenu />
                    <Search />
                    <MovieList movies={movies} handleMovieRequesting={this.requestMoreMovies} />
                </ModalProvider>
            </MainPageWrapper>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);