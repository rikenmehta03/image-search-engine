export const updateAnalyticsQuery = (payload) => {
    return {
        type: 'UPDATE_ANALYTICS_QUERY',
        payload
    };
}

export const clearAnalytics = () => {
    return {
        type: 'CLEAN_ANALYTICS'
    }
}