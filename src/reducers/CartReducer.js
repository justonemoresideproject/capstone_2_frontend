const INITIAL_STATE = {}

function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART_ITEM':
            return { ...state,
                cartItems : { ...state.cartItems,
                    [action.productId]: [action.productQty]
                }
            }

        case 'REMOVE_CART_ITEM':
            if(state[action.productId] > 1) {
                return { ...state,
                    cartItems: { ...state.cartItems,
                        [action.productId]: [state[action.productId] - 1] }
                    }
            }
            if(state[action.productId] = 1) {
                const newState = { ...state }

                delete newState.cartItems[action.productId]

                return newState;
            }
            return state;

        default:
            return state;
    }
}

export default cart