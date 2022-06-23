const INITIAL_STATE = {}

function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            console.log(action.product)
            return { ...state,
                    [action.product.id]: {
                        ...action.product
                    }
                }

        case 'SET_PRODUCTS':
            return { 
                    ...action.payload
                }

        case 'SET_QUERY_PRODUCTS':
            console.log(action.payload)
            return {
                ...state,
                "queryProducts": [action.payload]
            }
        
        case 'REMOVE_PRODUCT':
            const newState = { ...state }

            delete newState.products[action.payload.productId]

            return newState;

        default:
            return state;
    }
}

export default products