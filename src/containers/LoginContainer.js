import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";

import Login from '../components/Login';

const LoginContainer = ({ user }) => {
    let history = useHistory();

    const loginHandler = ({ email, password }) => {
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                history.push("/home");
            });
    }
    const logedin = localStorage.getItem('token') && user.email !== '';
    return logedin ? <Redirect to="/home" /> : <Login loginCallback={loginHandler} />;
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(LoginContainer);