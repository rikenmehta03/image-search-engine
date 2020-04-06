const initialState = {
    results: [],
    isFetchingResults: false,
    searchQuery: '',
    indexName: ''
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
                    results: action.payload,
                    isFetchingResults: false
                }
            } else {
                return {
                    ...state,
                    isFetchingResults: false
                }
            }
        default:
            return state
    }
}

export default search