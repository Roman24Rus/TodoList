import React from "react";
import Style from './fillingLine.module.css'


const FillingLine = () => {
    return (
        <div className={Style.blockNewItems}>
            <form>
                <input id="checbox-1" className={Style.buttonNotes} type='checkbox' />
                <label className={Style.fillingLabel} for="checbox-1">Note</label>
                <input className={Style.fillingLine} type='text' />
                <button className={Style.button}>+</button>
            </form>
        </div>
    );
}

export default FillingLine