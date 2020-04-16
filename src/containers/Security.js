import React from 'react';
import { Redirect } from 'react-router-dom';

export default () => {
    const token = localStorage.getItem('token');
    return <Redirect to={token ? "/home" : "/login"} />
}