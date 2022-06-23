const INITIAL_STATE = {}

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, 
                "token": action.payload
            }

        case 'SET_USER_ID':
            return { ...state,
                "userId": action.payload
            }

        case 'SET_AUTH_INFO':
            return {
                "token": action.payload.token,
                "userId": action.payload.userId,
                "isAdmin": action.payload.isAdmin
            }

        case 'SET_ALL_ADDRESSES':
            return { ...state,
                "addresses": action.payload }

        case 'SET_ALL_CUSTOMERS':
            return { ...state,
                "customers": action.payload }

        case 'SET_ALL_ORDERS':
            return { ...state,
                "orders": action.payload }

        case 'SET_ERROR':
            return { ...state,
                "error": action.payload }
        
        case 'RESET_TOKEN':
            console.log('RESET_TOKEN AUTH_REDUCER')
            return INITIAL_STATE

        default:
            return state;
    }
}

export default auth