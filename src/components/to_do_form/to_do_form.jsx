import { useState } from "react";
import { useContext } from "react";
import "./to_do_form.css";

import TasksContext from '../../context/TasksContext/TasksContext'


export default function ToDoForm(){
    const {states, actions} = useContext(TasksContext);
    const {task} = states;
    const { handleChange, handleAddTask} = actions;

    return (
        <>
         <div className="form__section">
            <div className="form">
                <div className="row">
                    <div className="col">
                        <label className="form__label">Add Task:</label>
                        <input
                            className="form__input" 
                            type="text"
                            value={task.description}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="btn" onClick={handleAddTask}>Submit</div>
                </div>
            </div>
         </div>
        </>
    )
}