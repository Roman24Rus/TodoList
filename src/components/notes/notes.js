import React from "react";
import Style from './notes.module.css'
import Note from "./note/note";


let obj = [
    { note: 'Привет как дела', isActive: true, id: 1 },
    { note: 'Привет как дела', isActive: true, id: 2 },
    { note: 'Привет как дела', isActive: true, id: 3 }
]




const Notes = () => {


    const note = obj.map((e) => <Note isActive={e.isActive} note={e.note} />)

    return (
        <div className={Style.notes}>
            <h1>Notes</h1>
            {note}
        </div>
    )
}

export default Notes