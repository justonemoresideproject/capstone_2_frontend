const INITIAL_STATE = {}

function error(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "SET_ERROR":
            return { ...action.payload }

        case "RESET":
            return INITIAL_STATE;
    }
}