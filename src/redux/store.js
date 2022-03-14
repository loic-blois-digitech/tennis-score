import {createStore} from "redux"
import {initialState, reducer} from "./reducer";

// on crée le store
export const store = createStore(reducer, initialState)