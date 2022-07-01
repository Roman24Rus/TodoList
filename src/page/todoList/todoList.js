import React, { useEffect } from "react";
import Style from './todoList.module.css'
import FillingLine from '../../components/fillingLine/fillingLine'
import Tasks from "../../components/tasks/tasks";
import Notes from "../../components/notes/notes";
import { connect } from 'react-redux'
import { addNote, addTask, delTask, delNote, isActive, setFilter, delTasks, editor, editorNote} from "../../store/reducer/reducer";

const getFilter = (filter) => {
    return filter;
  };

 const selectorTasks = (tasks, filter) => {
        if(filter === 'all') {
            return tasks
        }else if(filter === 'active') {
            return tasks.filter((e) => e.isActive === false)
        }else if(filter === 'completed') {
            return tasks.filter((e) => e.isActive === true)
        }
    }



const TodoList = (props) => {


    useEffect(() => {
        console.log('i')
        localStorage.setItem('tasks', JSON.stringify(props.tasks))
        localStorage.setItem('notes', JSON.stringify(props.notes))
    }, [props.tasks, props.notes,])

   


    
    return(
        <div className={Style.page}>
            <FillingLine addTask={props.addTask} addNote={props.addNote}/>
            <div className={Style.desktop}>
            <Tasks editor={props.editor} delTasks={props.delTasks} filter={props.filter} setFilter={props.setFilter} tasks={props.tasks} isActive={props.isActive} delTask={props.delTask}/>
            <Notes editorNote={props.editorNote} notes={props.notes} delNote={props.delNote}/>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        tasks: selectorTasks(state.tasks, state.filter),
        notes: state.notes,
        filter: getFilter(state.filter)
    }
}

export default connect(mapStateToProps, {addNote, editorNote, addTask, delTask, delNote, isActive, setFilter, delTasks, editor})(TodoList)