import React from 'react';
import { connect } from 'react-redux';

import Analytics from '../components/Analytics';

const AnalyticsContainer = ({ analytics }) => {
    
    return <Analytics data={analytics} />;
}

const mapStateToProps = state => ({
    analytics: state.analytics
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnalyticsContainer);