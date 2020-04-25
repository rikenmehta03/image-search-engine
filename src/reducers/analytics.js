const initialState = {
    id: '',
    url: '',
    objects: []
}

const analytics = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ANALYTICS_QUERY':
            return {
                ...state,
                id: action.payload._id,
                url: action.payload.url,
                objects: action.payload.primary
            }
        case 'CLEAR_ANALYTICS': 
            return initialState
        default:
            return state
    }
}

export default analytics