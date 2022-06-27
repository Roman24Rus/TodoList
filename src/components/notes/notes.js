import React from "react";
import Style from './notes.module.css'
import Note from "./note/note";
import { connect } from 'react-redux'





const Notes = (props) => {


    const note = props.note.map((e) => <Note key={e.id} id={e.id} isActive={e.isActive} note={e.note} />)

    return (
        <div className={Style.notes}>
            <h1>Notes</h1>
            {note}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
       note: state.noteReducer.notes
    }
}



export default connect(mapStateToProps, {})(Notes)

