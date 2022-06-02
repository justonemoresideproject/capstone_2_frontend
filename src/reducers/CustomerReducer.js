const INITIAL_STATE = {}

function customers(state = INITIAL_STATE, action) {
    switch(action.type){
        case "ADD_CUSTOMER":
            return { ...state,
                customers : {
                    ...state.customers,
                    [action.payload.id]: { ...action.payload}
                }
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