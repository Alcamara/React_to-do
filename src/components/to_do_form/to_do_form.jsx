import { useState } from "react";
import "./to_do_form.css";


export default function ToDoForm({ onAddTask, onChange, task }){


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
                            onChange={onChange} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="btn" onClick={onAddTask}>Submit</div>
                </div>
            </div>
         </div>
        </>
    )
}