import React, { useState } from "react";
import Style from './item.module.css'
import { deleteTask, isActiveTask } from "../../../store/reducer/taskReducer"
import { connect } from "react-redux";

const Item = (props) => {

    const [isActive, setIsActive] = useState(false) 
    const submit = (e) => {e.preventDefault()}

    const active = () => {
         props.isActiveTask(props.id, isActive)
        setIsActive(!isActive)
       
    }


    return (
        <div>
            <form onSubmit={(e) => submit(e)} className={isActive ? Style.itemCompleted : Style.item}>
                <input className={ Style.itemInput} checked={isActive}  id="itemCheckbox" type='checkbox'></input>
                <label onClick={active} for="itemCheckbox" className={Style.itemLabel}></label>
                <div className={Style.task}>{props.task}</div>
                <button onClick={() => props.deleteTask(props.id)} className={Style.itemButton}>X</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {deleteTask, isActiveTask})(Item) 