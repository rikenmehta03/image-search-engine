const initialState = {
    results: [],
    primary: [],
    isFetchingResults: false,
    searchQuery: ''
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_QUERY':
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case 'REQUEST_RESULTS':
            return {
                ...state,
                isFetchingResults: true
            }
        case 'RECEIVE_RESULTS':
            if (state.isFetchingResults === true || state.results.length === 0){
                return {
                    ...state,
                    results: action.data,
                    isFetchingResults: false,
                    ...action.metadata
                }
            } else {
                return {
                    ...state,
                    isFetchingResults: false
                }
            }
        case 'CLEAN_SEARCH':
            return initialState
        default:
            return state
    }
}

export default search