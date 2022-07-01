import React from "react";
import Style from './notes.module.css'
import Note from "./note/note";






const Notes = (props) => {

    const item = props.notes.map((item) => <Note editorNote={props.editorNote} key={item.id} id={item.id} text={item.note} delNote={props.delNote}/>)
   

    return (
        <div className={Style.notes}>
            <h1>Notes</h1>
            {(item.length) ? item : <h2>No notes</h2>}
        </div>
    )
}




export default Notes

