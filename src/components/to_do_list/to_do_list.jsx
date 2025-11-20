import "./to_do_list.css"
import { ListItem } from "./list_item/list_item";


export function ToDoList(){
    return (
        <>
            <div className="to_do_list__section">
                <div className="to_do_list">
                    <ListItem/>
                </div>
            </div>
        </>
    )
}