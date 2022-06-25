import React from "react";
import Item from "./item/item";
import Style from './tasks.module.css';

let obj = [
    { task: 'Привет как дела', isActive: true, id: 1 },
    { task: 'Привет как дела', isActive: true, id: 2 },
    { task: 'Привет как дела', isActive: true, id: 3 }
]


const Tasks = () => {

    const task = obj.map((e) => <Item isActive={e.isActive} task={e.task} />)

    return (
        <div className={Style.tasks}>
            <h1>Tasks</h1>
            <div className={Style.items}>
                {task}
            </div>
        </div>
    );
}

export default Tasks