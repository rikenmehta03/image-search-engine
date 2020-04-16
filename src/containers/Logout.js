import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { cleanUser } from '../actions/user';

const Logout = ({ removeUser }) => {
    useEffect(() => {
        localStorage.removeItem('token');
        removeUser();
    });
    return <Redirect to="/login"/>
}

const mapDispatchToProps = dispatch => ({
    removeUser: () => dispatch(cleanUser())
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(Logout);