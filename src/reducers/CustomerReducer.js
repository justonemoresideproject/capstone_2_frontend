const INITIAL_STATE = {}

function customers(state = INITIAL_STATE, action) {
    switch(action.type){
        case "ADD_CUSTOMER":
            return { ...state,
                [action.payload.id]: { ...action.payload }
            }

        case "SET_CUSTOMER":
            return { ...action.payload }

        case 'ADD_RECENT_ORDER':
            return { 
                "recentOrder" : { ...action.payload }
            }

        case 'SET_SECRET':
            return { ...state,
                secret: action.payload 
            }

        case "REMOVE_CUSTOMER":
            const newState = state;

            delete newState.customers[action.payload.customerId]

            return newState

        default:
            return state
    }
}

export default customers