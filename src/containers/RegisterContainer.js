import React from 'react';

import { useHistory, Redirect } from "react-router-dom";

import Register from '../components/Register';

export default () => {
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
                history.push("/");
            });
    }
    const token = localStorage.getItem('token');
    return token ? <Redirect to="/" /> : <Register logonCallback={registerHandler} />;
}
