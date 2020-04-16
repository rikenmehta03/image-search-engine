import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';

import { updateSearchQuery, fetchResults } from '../actions/search';

const Search = ({ dispatch, search }) => {

    const handleSubmit = (event, query = '') => {
        if (event.type === 'click' && query !== '') {
            dispatch(updateSearchQuery({ query }));
            dispatch(fetchResults(query));
        } else if (event.key === 'Enter') {
            dispatch(updateSearchQuery({ query: event.target.value }));
            dispatch(fetchResults(event.target.value));
        }

    }

    const handleFileUpload = () => {
        console.log("file uploaded");
    }

    return <SearchBar submitCallback={handleSubmit} uploadCallback={handleFileUpload} value={search.searchQuery} />;
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(
    mapStateToProps
)(Search);