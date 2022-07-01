import React, { useState } from "react";
import Style from './fillingLine.module.css'




const FillingLine = (props) => {

    const [type, setType] = useState(false)
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const errors = 'Необходимо ввести текст'

    const handlSubmit = (e) => {
        e.preventDefault()
        if (!type && text) {
            props.addTask(text)

        } else if(type && text) {
            props.addNote(text)
        }else {
            setError(true)
        }
        setText('')
    }



    return (
        <div className={Style.blockNewItems}>
            <form onSubmit={handlSubmit} className={Style.g}>
                <input id="checbox-1" className={Style.buttonNotes} type='checkbox' />
                <label onClick={() => setType(!type)} className={Style.fillingLabel} htmlFor="checbox-1">Note</label>
                <input onClick={() => setError(false)} onChange={(e) => setText(e.target.value)} value={(error) ? errors : text} className={Style.fillingLine} type='text' />
                <button className={Style.button}>+</button>
            </form>
        </div>
    );
}





export default FillingLine