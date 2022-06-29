import React from "react";
import './task.css';
import Item from './item/item'


const Tasks = (props) => {

    const filterForm = (e) => { 
        e.preventDefault()

     }

    const item = props.tasks.map((item) => <Item key={item.id} isActive={props.isActive} isActiveId={item.isActive} text={item.task} id={item.id}  delTask={props.delTask}/>)
   

    return (
        <div className='tasks'>
            <h1>Tasks</h1>
            <div className='items'>
               { (item.length) ? item : <h2>No Tasks</h2>}
                <div >
                    <form onSubmit={(e) => filterForm(e)} className={`buttonFilter button_${props.filter}`}>
                        <button onClick={(e) => props.setFilter(e.target.id)} id='all' className='buttonAll'>All</button>
                        <button onClick={(e) => props.setFilter(e.target.id)} id='active' className='buttonActive'>Active</button>
                        <button onClick={(e) => props.setFilter(e.target.id)} id='completed' className='buttonCompledet'>Compledet</button>
                        <button onClick={props.delTasks} className='buttonClear'>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    );
}





export default Tasks