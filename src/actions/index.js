export const updateSearchQuery = ({ query }) => {
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

export const receiveResults = (data) => {
    return {
        type: 'RECEIVE_RESULTS',
        payload: data
    }
}

export const fetchResults = query => {
    return dispatch => {
        dispatch(requestResults());

        return fetch('/api/search?q=' + query)
            .then(response => response.json())
            .then(json => dispatch(receiveResults(json.data)))
    }
}