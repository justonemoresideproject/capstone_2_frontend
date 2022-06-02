const INITIAL_STATE = {}

function addresses(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD_ADDRESS":
            return { ...state,
                addresses : {
                    ...state.addresses,
                    [action.payload.id]: { ...action.payload }
                }
            }

        case "REMOVE_ADDRESS":
            const newState = state;

            delete newState.customers[action.payload]

            return newState

        default:
            return state
    }
}

export default addresses