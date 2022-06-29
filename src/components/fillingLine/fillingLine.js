import React, { useState } from "react";
import Style from './fillingLine.module.css'




const FillingLine = (props) => {

    const [type, setType] = useState(false)
    const [text, setText] = useState('')

    const handlSubmit = (e) => {
        e.preventDefault()
        if (!type) {
            props.addTask(text)

        } else {
            props.addNote(text)
        }
        setText('')
    }



    return (
        <div className={Style.blockNewItems}>
            <form onSubmit={handlSubmit}>
                <input id="checbox-1" className={Style.buttonNotes} type='checkbox' />
                <label onClick={() => setType(!type)} className={Style.fillingLabel} htmlFor="checbox-1">Note</label>
                <input onChange={(e) => setText(e.target.value)} value={text} className={Style.fillingLine} type='text' />
                <button className={Style.button}>+</button>
            </form>
        </div>
    );
}





export default FillingLine