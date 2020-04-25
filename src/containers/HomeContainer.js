import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import { updateAnalyticsQuery } from '../actions/analytics';

const HomeContainer = ({ search, user, analytics, updateAnalyticsQuery }) => {
    return <Home user={user} search={search} analytics={analytics} updateAnalyticsQuery={updateAnalyticsQuery}/>;
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user,
    analytics: state.analytics
});

const mapDispatchToProps = dispatch => ({
    updateAnalyticsQuery: (payload) => dispatch(updateAnalyticsQuery(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);