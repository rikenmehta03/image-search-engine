import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { cleanUser } from '../actions/user';
import { clearSearch } from '../actions/search';
import { clearAnalytics } from '../actions/analytics';

const Logout = ({ removeUser, clearSearch, clearAnalytics }) => {
    useEffect(() => {
        localStorage.removeItem('token');
        removeUser();
        clearSearch();
        clearAnalytics();
    });
    return <Redirect to="/login"/>
}

const mapDispatchToProps = dispatch => ({
    removeUser: () => dispatch(cleanUser()),
    clearSearch: () => dispatch(clearSearch()),
    clearAnalytics: () => dispatch(clearAnalytics())
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(Logout);