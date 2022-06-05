const INITIAL_STATE = {}

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, 
                "token": [action.payload]}

        case 'SET_USER_ID':
            return { ...state,
                "userId": [action.payload]}

        case 'SET_AUTH_INFO':
            return { ...state,
                "token": [action.payload.token],
                "userId": [action.payload.userId],
                "isAdmin": [action.payload.isAdmin]
            }
        
        case 'RESET_TOKEN':
            return INITIAL_STATE

        default:
            return state;
    }
}

export default auth