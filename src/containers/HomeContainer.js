import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import { updateAnalyticsQuery, fetchGoogleVision, fetchImsearchResults, clearAnalytics } from '../actions/analytics';

const HomeContainer = (props) => {
    return <Home {...props} />;
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user,
    analytics: state.analytics
});

const mapDispatchToProps = dispatch => ({
    updateAnalyticsQuery: (payload) => dispatch(updateAnalyticsQuery(payload)),
    fetchGoogleVision: (query) => dispatch(fetchGoogleVision(query)),
    fetchImsearchResults: (query) => dispatch(fetchImsearchResults(query)),
    clearAnalytics: () => dispatch(clearAnalytics())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);