import React from "react";
import Style from './filter.module.css'
import { connect } from "react-redux";
import { allFilter, activeFilter, completedFilter, deleteTasks } from "../../store/reducer/taskReducer";


const Filter = (props) => {

    const filterForm = (e) => {e.preventDefault()}


    return(
        <div >
            <form onSubmit={(e) => filterForm(e)} className={Style.buttonFilter}>
                <button onClick={props.allFilter} className={Style.buttonAll}>All</button>
                <button onClick={props.activeFilter} className={Style.buttonActive}>Active</button>
                <button onClick={props.completedFilter} className={Style.buttonCompledet}>Compledet</button>
                <button onClick={props.deleteTasks} className={Style.buttonClear}>Clear</button>
            </form>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks
    }
}

export default connect(mapStateToProps, {allFilter, activeFilter, completedFilter, deleteTasks})(Filter)