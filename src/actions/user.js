export const updateUser = (payload) => {
    return {
        type: 'UPDATE_USER',
        payload
    }
}

export const cleanUser = () => {
    return {
        type: 'CLEAN_USER'
    }
}

export const fetchingUser = () => {
    return {
        type: 'FETCHING_USER'
    }
}

export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchingUser());
        return fetch('/api/user')
            .then(response => response.json())
            .then(json => dispatch(updateUser(json)))
    }
}