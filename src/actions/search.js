export const updateSearchQuery = (query) => {
    return {
        type: 'UPDATE_QUERY',
        searchQuery: query
    };
}

export const requestResults = () => {
    return {
        type: 'REQUEST_RESULTS'
    };
}

export const receiveResults = ({ data, metadata }) => {
    return {
        type: 'RECEIVE_RESULTS',
        data,
        metadata
    }
}

export const clearSearch = () => {
    return {
        type: 'CLEAN_SEARCH'
    }
}

export const fetchResults = (query) => {
    return dispatch => {
        dispatch(requestResults());
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
            .then(json => dispatch(receiveResults(json)));
    }
}