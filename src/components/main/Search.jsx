import React from 'react';
import styled from 'styled-components';
import { searchFilms } from '../../actions/getSearchedFilms.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SearchWrapper = styled.input`
    width: 70vw;
    padding: 8px;
    border: 1px lightgray solid;
    border-radius: 8px;
`;

const mapDispatchToProps = (dispatch) => ({
    searchFilms: bindActionCreators(searchFilms, dispatch)
})

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchQuery: '' 
        };
    }

    handleSearchInputChange = (e) => {
        this.setState(
            { searchQuery: e.target.value},
            () => this.props.searchFilms(this.state.searchQuery)
        )
    }

    render() {
        return (
            <SearchWrapper
                placeholder="Search for a movie"
                onKeyUp={this.handleSearchInputChange} />
        )
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Search)