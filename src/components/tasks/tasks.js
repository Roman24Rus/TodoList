import React, { useEffect } from "react";
import Item from "./item/item";
import Style from './tasks.module.css';
import { connect } from 'react-redux'




const Tasks = (props) => {



    const task = props.task.map((e) => <Item key={e.id} id={e.id} isActive={e.isActive} task={e.task} />)

    return (
        <div className={Style.tasks}>
            <h1>Tasks</h1>
            <div className={Style.items}>
                {task}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
       task: state.taskReducer.tasks
    }
}



export default connect(mapStateToProps, {})(Tasks)