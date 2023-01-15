const INITIAL_STATE = {}

function admin(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CUSTOMERS':
            return { ...state,
                "customers": action.payload }
        
        case 'SET_ORDERS':
            return { ...state,
                "orders": action.payload }

        case 'SET_ADDRESSES':
            return { ...state,
                "addresses": action.payload }

        case 'SET_ADMIN_INFO':
            return { ...state,
                "customers": action.payload.customers,
                "orders": action.payload.orders,
                "addresses": action.payload.addresses }

        case 'RESET':
            return INITIAL_STATE

        default:
            return state;
    }
}

export default admin