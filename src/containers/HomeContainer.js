import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';

const HomeContainer = ({ search, user }) => {
    return <Home user={user} search={search} />;
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user
});

export default connect(
    mapStateToProps
)(HomeContainer);