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

export const requestGoogleVision = () => {
    return {
        type: 'REQUEST_GOOGLE_VISION_RESULTS'
    }
}

export const receiveGoogleVision = ({ data }) => {
    return {
        type: 'UPDATE_GOOGLE_VISION_RESULTS',
        payload: data
    }
}

export const requestImsearchResults = () => {
    return {
        type: 'REQUEST_IMSEARCH_RESULTS'
    }
}

export const receiveImsearchResults = ({ data, metadata }) => {
    return {
        type: 'UPDATE_IMSEARCH_RESULTS',
        data,
        metadata
    }
}

export const fetchGoogleVision = query => {
    return dispatch => {
        dispatch(requestGoogleVision());

        const fixedEncodeURIComponent = (str) => {
            return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
                return '%' + c.charCodeAt(0).toString(16)
            })
        }
        let url, options;
        if (query.startsWith('data:image/')) {
            url = '/api/gvision'
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify({ q: query })
            }
        } else {
            url = '/api/gvision?q=' + fixedEncodeURIComponent(query);
            options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
            }
        }
        return fetch(url, options)
            .then(response => response.json())
            .then(json => dispatch(receiveGoogleVision(json)));
    }
}

export const fetchImsearchResults = query => {
    return dispatch => {
        dispatch(requestImsearchResults());
        const fixedEncodeURIComponent = (str) => {
            return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
                return '%' + c.charCodeAt(0).toString(16)
            })
        }
        let url, options;
        if (query.startsWith('data:image/')) {
            url = '/api/search'
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify({ q: query })
            }
        } else {
            url = '/api/search?q=' + fixedEncodeURIComponent(query);
            options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
            }
        }
        return fetch(url, options)
            .then(response => response.json())
            .then(json => dispatch(receiveImsearchResults(json)));
    }
}