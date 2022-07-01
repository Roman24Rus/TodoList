import React from "react";
import Style from './note.module.css'
import { useState } from "react";




const Note = (props) => {
    const [editing, setEditing] = useState(false)
    const [error, setError] = useState(false)
    const [text, setText] = useState(props.text)

    const editor = () => {
        if (text) {
            props.editorNote(text, props.id)
        } else {
            return setError(true)
        }

        setEditing(!editing)
    }
    const editingF = () => {
        if (text) {
            setEditing(!editing)
        } else {
            return setError(true)
        }
    }
    const editingOut = () => {
         setEditing(!editing)
         setText(props.text)
    }



    const errors = 'Необходимо ввести текст'

    return(
        <div className={Style.note}>
            <div className={Style.noteText}>{props.text}</div>
              <div className={Style.touch}>
                {!editing &&
                    <button onClick={editingF} className={Style.touchB}></button>
                }
                </div>
            <button onClick={() => props.delNote(props.id)} className={Style.noteButton}></button>
           
                {editing &&
                    <div className={Style.editor}>
                        <textarea onClick={() => setError(false)} className={Style.editing} autoFocus onChange={(e) => setText(e.target.value)} value={(error) ? errors : text} type='text'></textarea>
                        <button onClick={editingOut} className={Style.buttonEditorout}>x</button>
                        <button onClick={editor} className={Style.buttonEditor}>ok</button>
                    </div>
                }
        </div>
    )
}




export default Note