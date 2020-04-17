import React from 'react';
import { useHistory, Redirect } from "react-router-dom";

import Login from '../components/Login';

export default () => {
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
                history.push("/");
            });
    }
    const token = localStorage.getItem('token');
    return token ? <Redirect to="/" /> : <Login loginCallback={loginHandler} />;
}