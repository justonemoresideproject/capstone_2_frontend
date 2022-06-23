import { SET_ERROR } from "./types";

function setError(error) {
    return {type: SET_ERROR, payload: error}
}

export { setError }