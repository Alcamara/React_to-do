import "./to_do_list.css"
import { ListItem } from "./list_item/list_item";



export function ToDoList({ tasks }){
    console.log(tasks);
    return (
        <>
            <div className="to_do_list__section">
                <div className="to_do_list">
                    {
                        tasks && 
                        tasks.map((task) => (
                            <ListItem key={task.id} task={task}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}