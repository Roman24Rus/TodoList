import React, { useState } from "react";
import Style from './item.module.css'


const Item = (props) => {
    const [text, setText] = useState(props.text)
    const [editing, setEditing] = useState(false)
    const handlSubmit = (e) => { e.preventDefault() }
    const [error, setError] = useState(false)

    const errors = 'Необходимо ввести текст'

    const active = () => {
        props.isActive(props.id)
    }
    const editor = () => {
        if (text) {
            props.editor(text, props.id)
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


    return (
        <div>
            <form onSubmit={handlSubmit} className={props.isActiveId && props.id ? Style.itemCompleted : Style.item}>
                <input className={Style.itemInput} checked={props.isActiveId && props.id} id="itemCheckbox" type='checkbox'></input>
                <label onClick={active} htmlFor="itemCheckbox" className={Style.itemLabel}></label>
                <div className={Style.task}>{text}</div>
                <div className={Style.touch}>
                {!editing &&
                    <button onClick={editingF} className={Style.touchB}></button>
                }
                </div>
                {editing &&
                    <div className={Style.editor}>
                        <input onClick={() => setError(false)} className={Style.editing} autoFocus onChange={(e) => setText(e.target.value)} value={(error) ? errors : text} type='text'></input>
                        <button onClick={editingOut} className={Style.buttonEditorout}>x</button>
                        <button onClick={editor} className={Style.buttonEditor}>ok</button>
                    </div>
                }
                <button onClick={() => props.delTask(props.id)} disabled={editing} className={Style.itemButton}>X</button>
            </form>

        </div>
    );
}




export default Item