import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";

import Register from '../components/Register';

const RegisterContainer  = ({ user }) => {
    let history = useHistory();

    const registerHandler = ({ firstname, lastname, email, password }) => {
        const name = firstname + ' ' + lastname;
        fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, 
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
    return logedin ? <Redirect to="/home" /> : <Register logonCallback={registerHandler} />;
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(RegisterContainer);