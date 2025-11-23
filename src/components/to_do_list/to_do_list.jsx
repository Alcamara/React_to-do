import "./to_do_list.css"
import { ListItem } from "./list_item/list_item";
import { useContext } from "react";
import { useEffect } from "react";
import TasksContext from '../../context/TasksContext/TasksContext';



export function ToDoList(){
    
    const {states, actions} = useContext(TasksContext);
    const { tasks } = states;
    const { handleClick } =actions;

    useEffect(() => {

    }, [tasks])

    return (
        <>
            <div className="to_do_list__section">
                <div className="to_do_list">
                    {
                        tasks && 
                        tasks.map((task) => (
                            <ListItem 
                                key={task.id} 
                                task={task}
                                handleClick={handleClick}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}