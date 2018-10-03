import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestDetails } from '../../actions/apiActions';
import MovieDetails from './MovieDetails';
import HoriontalScroll from './HoriontalScroll';


const DetailsPageWrapper = styled.div`
    background-color: ${({ theme }) => theme.altGray};
    min-height: 100vh;
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

    render() {
        return (
            <DetailsPageWrapper>
                <MovieDetails movie={this.props.movieDetailsApi} />
                <HoriontalScroll>
                    {this.props.movieDetailsApi}
                </HoriontalScroll>
            </DetailsPageWrapper>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DetailsPage);