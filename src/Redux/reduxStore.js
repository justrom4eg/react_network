import { combineReducers, legacy_createStore as createStore} from "@reduxjs/toolkit";
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'

let reducers = combineReducers({
    dialog: dialogReducer,
    posts: profileReducer
})

let store = legacy_createStore(reducers)

export default store