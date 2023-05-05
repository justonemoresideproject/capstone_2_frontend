const INITIAL_STATE = {}

function queryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_QUERY_PRODUCTS':
            return {
                ...state,
                "queryProducts": action.payload
            }

        default:
            return state;
    }
}

export default queryReducer