import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestDetails } from '../../actions/apiActions';
import MovieDetails from './MovieDetails';
import Credits from './Credits';
import Recommendations from './Recommendations';
import ErrorPage from '../common/ErrorPage';

const DetailsPageWrapper = styled.div`
    background-color: ${({ theme }) => theme.altGray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = ({ movieDetailsApi }) => ({
    movieDetailsApi
});

const mapDispatchToProps = (dispatch) => ({
    requestDetails: bindActionCreators(requestDetails, dispatch)
});

class DetailsPage extends React.Component {
    componentWillMount() {
        this.props.requestDetails(this.props.match.params.movieId);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
            this.props.requestDetails(nextProps.match.params.movieId);
        }
     }

    render() {
        return !this.props.movieDetailsApi.error ?
        (
            <DetailsPageWrapper>
                <MovieDetails movie={this.props.movieDetailsApi} />
                <Credits credits={this.props.movieDetailsApi.credits} 
                    movieId={this.props.match.params.movieId} />
                <Recommendations recommendations={this.props.movieDetailsApi.recommendations.results} />
            </DetailsPageWrapper>
        ) : <ErrorPage error={this.props.movieDetailsApi.error} />;
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DetailsPage);