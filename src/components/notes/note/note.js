import React from "react";
import Style from './note.module.css'




const Note = (props) => {

    return(
        <div className={Style.note}>
            <div className={Style.noteText}>{props.text}</div>
            <button onClick={() => props.delNote(props.id)} className={Style.noteButton}></button>
        </div>
    )
}




export default Note