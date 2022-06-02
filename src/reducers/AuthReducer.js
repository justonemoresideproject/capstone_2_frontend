const INITIAL_STATE = {}

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, 
                "token": [action.payload]}
        
        case 'RESET_TOKEN':
            return INITIAL_STATE

        default:
            return state;
    }
}

export default auth