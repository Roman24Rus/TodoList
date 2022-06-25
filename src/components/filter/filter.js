import React from "react";
import Style from './filter.module.css'


const Filter = () => {
    return(
        <div >
            <form className={Style.buttonFilter}>
                <button className={Style.buttonAll}>All</button>
                <button className={Style.buttonActive}>Active</button>
                <button className={Style.buttonCompledet}>Compledet</button>
                <button className={Style.buttonClear}>Clear</button>
            </form>
        </div>
    );
}
export default Filter