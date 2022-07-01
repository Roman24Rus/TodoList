import { v4 as uuidv4 } from 'uuid';

const ADD_TASK = 'ADD_TASK'
const DEL_TASK = 'DEL_TASK'
const IS_ACTIVE = 'IS_ACTIVE'
const DEL_TASKS ='DEL_TASKS'
const EDITOR_TASK = 'EDITOR_TASK'

const ADD_NOTE = 'ADD_NOTE'
const DEL_NOTE = 'DEL_NOTE'
const EDITOR_NOTE = 'EDITOR_NOTE'
const FILTER = 'FILTER'


export const tasks = (state = [], action) => {
    if(action.type === ADD_TASK) {
        return [...state, action.payload]
    }else if(action.type === DEL_TASK) {
        return [...state.filter((e) =>  e.id !== action.id )]
    }else if(action.type === IS_ACTIVE) {
        return [...state.map((e) => {
            if(e.id === action.id) {
                return { ...e, isActive: !e.isActive}
            }
            return e
        })]   
    }else if(action.type === DEL_TASKS) {
        return [...state.filter((item) => item.isActive !== true)]
    }else if(action.type === EDITOR_TASK) {
        return [...state.map((e) => {
            if(e.id === action.id) {
              return  {...e, task: action.text}
            }
            return e
        })]
    }
    return state
}
export const notes = (state = [], action) => {
    if(action.type === ADD_NOTE) {
        return [...state, action.payload]
    }else if(action.type === DEL_NOTE) {
        return [...state.filter((e) =>  e.id !== action.id )]
    }else if(action.type === EDITOR_NOTE) {
        return [...state.map((e) => {
            if(e.id === action.id) {
              return  {...e, note: action.text}
            }
            return e
        })]
    }
    return state
}
export const filter = (state = 'all', action) => {
    if(action.type === FILTER) {
        return action.payload
    }
    return state
}






const addNoteAC = (text) => {
    return {
        type: ADD_NOTE,
        payload: {
        id: uuidv4(),
        note: text,
        }
    }
}
const delNoteAC = (id) => {
    return {
        type: DEL_NOTE,
        id
    }
}
const editorAC = (text, id) => {
    return {
        type: EDITOR_TASK,
        id,
        text
    }
}
export const editor = (text, id) => {
    return (dispatch) => {
        dispatch(editorAC(text, id))
    }
}
export const addNote = (text) => {
    return (dispatch) => {
        dispatch(addNoteAC(text))
    }
}
export const delNote = (id) => {
    return (dispatch) => {
        dispatch(delNoteAC(id))
    }
}


const editorNoteAC = (text, id) => {
    return {
        type: EDITOR_NOTE,
        id,
        text
    }
}
const addTaskAC = (text) => {
    return {
        type: ADD_TASK,
        payload: {
        id: uuidv4(),
        task: text,
        isActive: false
        }
    }
}
const delTaskAC = (id) => {
    return {
        type: DEL_TASK,
        id
    }
}
const isActiveAC = (id) => {
    return {
        type: IS_ACTIVE,
        id,
    }
}
const delTasksAC = () => {
    return {
        type: DEL_TASKS
    }
}
export const addTask = (text) => {
    return (dispatch) => {
        dispatch(addTaskAC(text))
    }
}
export const delTask = (id) => {
    return (dispatch) => {
        dispatch(delTaskAC(id))
    }
}
export const isActive = (id) => {
    return (dispatch) => {
        dispatch(isActiveAC(id))
    }
}
export const delTasks = () => {
    return (dispatch) => {
        dispatch(delTasksAC())
    }
}
export const editorNote = (text, id) => {
    return (dispatch) => {
        dispatch(editorNoteAC(text, id))
    }
}




const filterAC = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
}
export const setFilter = (filter) => {
    return (dispatch) => {
        dispatch(filterAC(filter))
    }
}
