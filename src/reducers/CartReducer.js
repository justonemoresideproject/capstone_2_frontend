const INITIAL_STATE = {}

function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART_ITEM':
            return { ...state,
                    [action.payload.id]: action.payload.quantity
                }

        case 'REMOVE_CART_ITEM':
            if(state[action.productId] > 1) {
                return { ...state,
                        [action.productId]: state[action.productId] - 1 }
            }
            if(state[action.productId] = 1) {
                const newState = { ...state }

                delete newState[action.productId]

                return newState;
            }
            return state;

        case 'RESET_CART':
            return INITIAL_STATE;

        default:
            return state;

    }
}

export default cart