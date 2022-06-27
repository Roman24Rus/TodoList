import { v4 as uuidv4 } from 'uuid';

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TASK_ALL_FILTER = 'TASK_ALL_FILTER'
const TASK_ACTIVE_FILTER = 'TASK_ACTIVE_FILTER'
const TASK_COMPLETED_FILTER = 'TASK_COMPLETED_FILTER'
const TASK_IS_ACTIVE = 'TASK_IS_ACTIVE'
const DELETE_TASKS ='DELETE_TASKS'
const EDITING_TASK = 'EDITING_TASK'



let initialState = {
    tasks:  [
        { task: 'Задача 1', isActive: true, id: 1 },
        { task: 'Задача 2', isActive: true, id: 2 },
        { task: 'Задача 3', isActive: true, id: 3 }
    ]
}

export const taskReducer = (state = initialState, action) => {
    if (action.type === ADD_TASK) {
        return {
            ...state,
            tasks: [...state.tasks, {task: action.task, isActive: false, id: uuidv4()}]
        }
    }else if(action.type === DELETE_TASK) {
        return {
            ...state,
            tasks: [...state.tasks.filter((elem) => elem.id !== action.id)]
        }
    }else if(action.type === TASK_ALL_FILTER) {
        return {
            ...state,
            tasks: [...state.tasks ]
        }
    }else if(action.type === TASK_ACTIVE_FILTER) {
        return {
            ...state,
            tasks: [...state.tasks.filter((elem) => elem.isActive === true)]
        }
    }else if(action.type === TASK_COMPLETED_FILTER) {
        return {
            ...state,
            tasks: [...state.tasks.filter((elem) => elem.isActive === false)]
        }
    }else if(action.type === DELETE_TASKS) {
        return {
            ...state,
            tasks: []
        }
    }else if(action.type === TASK_IS_ACTIVE) {
        return {
            ...state,
            tasks: state.tasks.map((e) => {
                if(e.id === action.id) {
                return {...e, isActive: action.isActive}
            }
        return e
    })
        }
    }else if(action.type === EDITING_TASK) {
        return {
            ...state,
            tasks: state.tasks.map((e) => {
                if(e.id === action.id) {
                    return {...e, task: action.task}
                }
               return e 
            })
        }
    }
    return state
}

const addTaskAC = (task) => ({type: ADD_TASK, task })
const deleteTaskAC = (id) => ({type: DELETE_TASK, id})
const allFilterAC = () => ({type: TASK_ALL_FILTER})
const activeFilterAC = () => ({type: TASK_ACTIVE_FILTER})
const completedFilterAC = () => ({type: TASK_COMPLETED_FILTER})
const deleteAC = () => ({type: DELETE_TASKS})
const activeAC = (id, isActive) => ({type: TASK_IS_ACTIVE, id, isActive})
const editingAC = (task, id) => ({type: EDITING_TASK, task, id})



export const editingTask = (task, id) => {
    return (dispatch) => {
        dispatch(editingAC(task, id))
    }
}

export const isActiveTask = (id, isActive) => {
    return (dispatch) => {
        dispatch(activeAC(id, isActive))
    }
}

export const deleteTasks = () => {
    return (dispatch) => {
        dispatch(deleteAC())
    }
}

export const completedFilter = () => {
    return (dispatch) => {
        dispatch(completedFilterAC())
    }
}



export const activeFilter = () => {
    return (dispatch) => {
        dispatch(activeFilterAC())
    }
}

export const allFilter = () => {
    return (dispatch) => {
        dispatch(allFilterAC())
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch(deleteTaskAC(id))
    }
}

export const addTask = (task) => {
    return (dispatch) => {
        dispatch(addTaskAC(task))
    }
}



