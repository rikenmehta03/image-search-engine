import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Home from '../components/Home';
import { fetchUser } from '../actions/user';

const HomeContainer = ({ search, user, getUser }) => {
    useEffect(() => {
        getUser();
    }, []);
    return user.email !== '' ? <Home user={user} search={search} /> : <Redirect to="/login" />;
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(fetchUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);