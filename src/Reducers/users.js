const fetchUsers = (state = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.users
        
        case 'DELETE_USERS': return {
            ...state,
            users: state.users.filter(item => item._id !== action.users)
        }
        default: return state
    }
}

export {fetchUsers}