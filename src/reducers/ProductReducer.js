const INITIAL_STATE = {}

function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, 
                products: {
                    ...state.products,
                    [action.productId]: {
                        ...action.product
                    }
                }}
        
        case 'REMOVE_PRODUCT':
            const newState = { ...state }

            delete newState.products[action.productId]

            return newState;

        default:
            return state;
    }
}

export default products