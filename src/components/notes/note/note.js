import React from "react";
import Style from './note.module.css'


const Note = (props) => {
    return(
        <div className={Style.note}>
            <div className={Style.noteText}>{props.note}</div>
            <button className={Style.noteButton}></button>
        </div>
    )
}


export default Note