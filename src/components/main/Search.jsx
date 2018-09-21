import React from 'react';
import styled from 'styled-components';
import { fetchNewFilmsSearch } from '../../actions/apiActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchQuery } from '../../actions/searchQueryActions.js';

const SearchWrapper = styled.input`
    width: 70vw;
    padding: 8px;
    border: 1px lightgray solid;
    border-radius: 8px;
`;

const mapStateToProps = (state) => ({
    searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    fetchNewFilmsSearch: bindActionCreators(fetchNewFilmsSearch, dispatch),
    changeSearchQuery: bindActionCreators(changeSearchQuery, dispatch)
});

class Search extends React.Component {
    handleSearchInputChange = (e) =>
        this.props.fetchNewFilmsSearch({ query: (this.props.changeSearchQuery(e.target.value).payload), page: 1 });

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