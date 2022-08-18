import { createStore } from "redux"
import counterReduce from "./counter/counterReducer"

const store = createStore(counterReduce)

export default store;