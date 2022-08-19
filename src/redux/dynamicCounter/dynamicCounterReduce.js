
import { DDECREMENT, DINCREMENT } from "./actionTypes";

export const initialState = {
    value: 0
}

const dynamicCounterReduce = (state = initialState, action) => {
    switch (action.type) {

        case DINCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };

        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };

        default:
            return state
    }
}

export default dynamicCounterReduce;