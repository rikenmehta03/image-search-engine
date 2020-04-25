import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';

import { updateSearchQuery, fetchResults } from '../actions/search';

const Search = ({ dispatch, search }) => {

    const handleSubmit = (event, query = '') => {
        if (event.type === 'click' && query !== '') {
            dispatch(updateSearchQuery(query));
            dispatch(fetchResults(query));
        } else if (event.key === 'Enter') {
            dispatch(updateSearchQuery(event.target.value));
            dispatch(fetchResults(event.target.value));
        }
    }

    const handleFileUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const query = reader.result;
                dispatch(updateSearchQuery(query));
                dispatch(fetchResults(query));
            }
            reader.onerror = error => console.log(error);
        }
    }

    return <SearchBar submitCallback={handleSubmit} uploadCallback={handleFileUpload} value={search.searchQuery} />;
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(
    mapStateToProps
)(Search);