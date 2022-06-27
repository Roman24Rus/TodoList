import React, { useEffect, useState } from "react";
import Style from './fillingLine.module.css'
import { connect } from 'react-redux'
import { addTask } from "../../store/reducer/taskReducer";
import { addNote } from "../../store/reducer/noteReducer";


const FillingLine = (props) => {

    const [task, setTask] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const addText = (e) => { setTask(e) }
    const submit = (e) => { e.preventDefault() }

    const add = () => {
        if (isChecked) {
            props.addNote(task)
        } else {
            props.addTask(task)
        }
    }


    return (
        <div className={Style.blockNewItems}>
            <form onSubmit={submit}>
                <input id="checbox-1" className={Style.buttonNotes} type='checkbox' checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                <label className={Style.fillingLabel} for="checbox-1">Note</label>
                <input onChange={(e) => addText(e.target.value)} className={Style.fillingLine} type='text' />
                <button className={Style.button} onClick={add}>+</button>
            </form>
        </div>
    );
}

const mapstateToProps = (state) => {
    return {

    }
}




export default connect(mapstateToProps, { addTask, addNote })(FillingLine)