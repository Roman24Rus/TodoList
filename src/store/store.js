import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {taskReducer} from '../store/reducer/taskReducer'
import {noteReducer} from '../store/reducer/noteReducer'

const reducer = combineReducers({
    taskReducer,
    noteReducer
})

export const store = createStore(reducer, applyMiddleware(thunk)) 