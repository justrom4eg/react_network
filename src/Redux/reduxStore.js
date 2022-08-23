import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'

let reducers = combineReducers({
    dialog: dialogReducer,
    posts: profileReducer
})

let store = configureStore({reducer:reducers})

export default store