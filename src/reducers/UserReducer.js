const INITIAL_STATE = {}

function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER_ORDERS':
            console.log(action.payload)
            return { ...state,
                "orders": action.payload }

        case 'ADD_ORDER':
            return { ...state,
                "orders": { ...state.orders,
                    [action.payload.id] : [action.payload]
                }}

        case 'SET_MY_ADDRESSES':
            return { ...state,
                "addresses": action.payload }

        case 'ADD_ADDRESS':
            return { ...state,
                "addresses": {...state.addresses, 
                    [action.payload.id] : [action.payload]
                }}

        case 'SET_USER_PROFILE':
            return { ...state, 
                "myProfile": action.payload }

        case 'RESET_PROFILE':
            return INITIAL_STATE
        
        default:
            return state;
    }
}

export default user