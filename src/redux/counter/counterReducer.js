
import { DECREMENT, INCREMENT } from "./actionType";

export const initialState = {
    value: 20
}

const counterReduce = (state = initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };

        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return state
    }
}

export default counterReduce;