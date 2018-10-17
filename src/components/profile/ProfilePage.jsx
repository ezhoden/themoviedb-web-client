import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestMovie, requestProfile } from '../../actions/apiActions';
import Title from '../common/Title';
import MovieList from '../common/MovieList';
import requestTypes from '../../constants/requestTypes';
import MovieCard from './MovieCard';

const ProfilePageWrapper = styled.div`
    background-color: ${({ theme }) => theme.altGray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = ({ profile, searchMovieApi }) => ({
    profile,
    searchMovieApi
});

const mapDispatchToProps = (dispatch) => ({
    requestProfile: bindActionCreators(requestProfile, dispatch),
    requestMovie: bindActionCreators(requestMovie, dispatch)
});

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { requestType: requestTypes.FAVORITES }
    }

    componentWillMount() {
        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) {
            this.props.requestProfile();
            //  реквест фильма происходит раньше респонса профиля, поэтому не реквестит фильмы
            this.props.requestMovie(1, this.state.requestType, null, this.props.profile && this.props.profile.id);
        }
    }

    requestMoreMovies = () => {
        this.props.requestMovie(this.props.searchMovieApi.page + 1, this.state.requestType);
    }

    handleRequestTypeChange = (requestType) => {
        this.setState({ requestType });
    }

    render() {
        const movies = this.props.searchMovieApi.results.map((movie, index) =>
            <MovieCard
                index={index}
                movie={movie} />
        );
        return (
            <ProfilePageWrapper>
                <Title>{this.props.profile && this.props.profile.username}</Title>
                <MovieList movies={movies} handleMovieRequesting={this.requestMoreMovies} />
            </ProfilePageWrapper>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);