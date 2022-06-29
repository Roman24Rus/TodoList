import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tasks, notes, filter } from '../store/reducer/reducer'
import { v4 as uuidv4 } from 'uuid'



const initialStore = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [{id: uuidv4(), task: 'task', isActive: false}],
    notes: JSON.parse(localStorage.getItem('notes')) || [{id: uuidv4(), note: 'note'}]
}

const reducer = combineReducers({
    tasks,
    notes,
    filter,
})

export const store = createStore(reducer, initialStore, applyMiddleware(thunk)) 