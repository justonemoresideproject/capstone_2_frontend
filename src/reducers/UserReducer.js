const INITIAL_STATE = {}

function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MY_ORDERS':
            return { ...state,
                "orders": action.payload }

        case 'SET_MY_ADDRESSES':
            return { ...state,
                "addresses": action.payload }

        case 'SET_MY_PROFILE':
            return { ...state, 
                "myProfile": action.payload }

        case 'RESET_PROFILE':
            return INITIAL_STATE
        
        default:
            return state;
    }
}

export default user