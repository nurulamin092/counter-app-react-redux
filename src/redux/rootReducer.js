import { combineReducers } from "redux";
import counterReduce from "./counter/counterReducer";
import dynamicCounterReduce from "./dynamicCounter/dynamicCounterReduce";

const rootReducer = combineReducers({
    counter: counterReduce,
    dynamicCounter: dynamicCounterReduce,
});

export default rootReducer;