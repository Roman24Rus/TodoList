import React, { useState } from "react";
import Style from './item.module.css'


const Item = (props) => {
    const [editing, setEditing] = useState(false)
    const handlSubmit = (e) => { e.preventDefault() }

    const active = () => {
        props.isActive(props.id)
    }


    return (
        <div>
            <form onSubmit={handlSubmit} className={props.isActiveId && props.id ? Style.itemCompleted : Style.item}>
                <input className={Style.itemInput}  checked={props.isActiveId && props.id} id="itemCheckbox" type='checkbox'></input>
                <label onClick={active} htmlFor="itemCheckbox" className={Style.itemLabel}></label>
                {!editing &&
                    <div onClick={() => setEditing(!editing)} className={Style.task}>{props.text}</div>
                }
                {editing &&
                    <input className={Style.editing} autoFocus type='text'></input>
                }
                <button onClick={() => props.delTask(props.id)} disabled={editing} className={Style.itemButton}>X</button>
            </form>
        </div>
    );
}




export default Item