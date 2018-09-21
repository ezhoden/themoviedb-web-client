import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../common/Breadcrumbs.jsx';

const DetailsPageWrapper = styled.div`

`;

const mapStateToProps = (state) => ({
    apiReducer: state.apiReducer
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingFilms: bindActionCreators(fetchTrendingFilms, dispatch),
    searchFilms: bindActionCreators(searchFilms, dispatch)
});

class DetailsPage extends React.Component {
    render() {
        return (
            <DetailsPageWrapper>
                <Breadcrumbs></Breadcrumbs>
                <FilmDetails></FilmDetails>
            </DetailsPageWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);