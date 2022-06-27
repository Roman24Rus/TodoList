import { v4 as uuidv4 } from 'uuid';


const ADD_NOTE = 'ADD_NOTE'
const DELETE_NOTES = 'DELETE_NOTES'

const initialState = {
    notes: [
        { note: 'Заметка 1', id: 1},
        { note: 'Заметка 2', id: 2},
        { note: 'Заметка 3', id: 3}
    ]
}

export const noteReducer = (state = initialState, action) => {
    if (action.type === ADD_NOTE) {
        return {
            ...state,
            notes: [...state.notes, {note: action.note, id: uuidv4()}]
        }
    }else if(action.type === DELETE_NOTES) {
        return {
            ...state,
            notes: [...state.notes.filter((elem) => elem.id !== action.id)]
        }
    }

    return state
}

const addNoteAC = (note) => ({ type: ADD_NOTE,note})
const deleteNoteAC = (id) => ({type: DELETE_NOTES, id})

export const deleteNotes = (id) => {
    return (dispatch) => {
        dispatch(deleteNoteAC(id))
    }
}

export const addNote = (task) => {
    return (dispatch) => {
        dispatch(addNoteAC(task))
    }
}