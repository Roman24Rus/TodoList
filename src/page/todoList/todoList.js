import React from "react";
import Style from './todoList.module.css'
import FillingLine from '../../components/fillingLine/fillingLine'
import Tasks from "../../components/tasks/tasks";
import Filter from "../../components/filter/filter";
import Notes from "../../components/notes/notes";


const TodoList = () => {
    return(
        <div className={Style.page}>
            <FillingLine />
            <Tasks />
            <Filter />
            <Notes />
        </div>
    );
}

export default TodoList