const initialState = {
    user_id: '',
    name: '',
    email: '',
    selected_index: '',
    fetchingUser: false,
    indices: []
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload,
                fetchingUser: false
            }
        case 'FETCHING_USER':
            {
                return {
                    ...state,
                    fetchingUser: true
                }
            }
        case 'UPDATE_INDEX':
            return {
                ...state,
                selected_index: action.selected_index
            }
        case 'UPDATE_INDICES':
            return {
                ...state,
                indices: action.indices
            }
        case 'CLEAN_USER':
            return initialState
        default:
            return state
    }
}

export default search