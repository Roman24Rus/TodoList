import React from "react";
import Style from './item.module.css'

const Item = (props) => {
    return (
        <div>
            <form className={Style.item}>
                <input className={Style.itemInput} id="itemCheckbox" type='checkbox'></input>
                <label onClick={() => console.log('hi')} for='itemCheckbox' className={Style.itemLabel}></label>
                <div className={Style.task}>{props.task}</div>
                <button className={Style.itemButton}>X</button>
            </form>
        </div>
    );
}

export default Item