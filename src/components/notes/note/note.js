import React from "react";
import Style from './note.module.css'
import { connect } from "react-redux";
import { deleteNotes } from "../../../store/reducer/noteReducer";


const Note = (props) => {

    return(
        <div className={Style.note}>
            <div className={Style.noteText}>{props.note}</div>
            <button onClick={() => props.deleteNotes(props.id)} className={Style.noteButton}></button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {deleteNotes})(Note)