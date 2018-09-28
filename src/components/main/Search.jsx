import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestMovie, searchQueryChanged } from '../../actions/apiActions';
import requestTypes from '../../constants/requestTypes';

const SearchWrapper = styled.input`
    width: 50vw;
    margin: 16px;
    padding: 12px;
    font-size: ${({ theme }) => theme.defaultTextSize};
    border: ${({ theme }) => theme.defaultBorder};
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.lightBlue};
    }
`;

const mapStateToProps = (state) => ({
    searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    requestMovie: bindActionCreators(requestMovie, dispatch),
    searchQueryChanged: bindActionCreators(searchQueryChanged, dispatch)
});

class Search extends React.Component {
    handleSearchInputChange = (e) => {
        const inputValue = this.props.searchQueryChanged(e.target.value).payload;
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
    mapStateToProps,
    mapDispatchToProps
)(Search);