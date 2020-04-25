import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import Loading from '../components/Loading';
import Home from '../containers/HomeContainer';
import { updateToken, fetchUser } from '../actions/user';

const Security = ({ user, updateToken, fetchUser }) => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(user.token === '' && token)
            updateToken(token);
    });

    useEffect(() => {
        if(!user.fetchingUser)
            fetchUser();
    }, [user.token, fetchUser]);

    if(user.fetchingUser)
        return <Loading />;

    if(user.email !== '')
        return <Home />;
    
    return <Redirect to="/login" />;
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),
    updateToken: (token) => dispatch(updateToken(token))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Security);