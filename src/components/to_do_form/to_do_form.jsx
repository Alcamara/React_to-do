import { useState } from "react";
import "./to_do_form.css";




export default function ToDoForm(){

    const [task, setTask] = useState("");

    const handleChange = ({target}) => {
        setTask(target.value)
    }

    const handleSubmition = () => console.log(task);
    

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
                            value={task}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="btn">Submit</div>
                </div>
            </div>
         </div>
        </>
    )
}