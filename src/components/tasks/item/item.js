import React, { useState } from "react";
import Style from './item.module.css'
import { deleteTask, isActiveTask, editingTask } from "../../../store/reducer/taskReducer"
import { connect } from "react-redux";

const Item = (props) => {
    const [editingTask, setEditingTask] = useState(props.task)
    const [editing, setEditing] = useState(true)
    const [isActive, setIsActive] = useState(false) 
    const submit = (e) => {e.preventDefault()}

    const active = () => {
         props.isActiveTask(props.id, isActive)
        setIsActive(!isActive)
       
    }

    const editingtaskF = () => {
        setEditing(!editing)
        props.editingTask(editingTask, props.id)
    }


    const editingF = (e) => {
        setEditingTask(e)

    }
    


    return (
        <div>
            <form onSubmit={(e) => submit(e)} className={isActive ? Style.itemCompleted : Style.item}>
                <input className={ Style.itemInput} checked={isActive}  id="itemCheckbox" type='checkbox'></input>
                <label onClick={active} for="itemCheckbox" className={Style.itemLabel}></label>
                {!editing &&
                <div onClick={() => setEditing(!editing)} className={Style.task}>{props.task}</div>
                }
                {editing &&
                <input onChange={(e) => editingF(e.target.value)} className={Style.editing} value={editingTask} autoFocus onBlur={editingtaskF} type='text'></input> 
                }
                <button onClick={() => props.deleteTask(props.id)} className={Style.itemButton}>X</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {deleteTask, isActiveTask, editingTask})(Item) 