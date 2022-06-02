const INITIAL_STATE = {}

function orders(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_ORDER':
            return { ...state, 
                orders: {
                    ...state.orders,
                    [action.payload.id]: { ...action.payload }
                }}

        case 'REMOVE_ORDER':
            const newState = { ...state }

            delete newState.orders[action.payload]

            return newState

        default:
            return state;
    }
}

export default orders