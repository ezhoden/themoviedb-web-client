import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestMovie } from '../../actions/apiActions';
import requestTypes from '../../constants/requestTypes';
import Input from '../common/Input';

const SearchWrapper = styled(Input)`
    width: 50vw;
`;

const mapDispatchToProps = (dispatch) => ({
    requestMovie: bindActionCreators(requestMovie, dispatch)
});

class Search extends React.Component {
    handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        const searchType = inputValue.length > 0 ? requestTypes.SEARCH : requestTypes.TRENDS;
        this.props.requestMovie(1, searchType, inputValue);
    }
    
    render() {
        return (
            <SearchWrapper
                placeholder="Search for a movie"
                onChange={this.handleSearchInputChange} />
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Search);