import "./header.css";
import toDoLogo from "../../assets/list_6612035.png"


export default function Header(){
    return (
            <header className="header">
                <img className="logo" src={toDoLogo} alt="to-do logo"/>
                <h1 className="header-text">GET IT DO!</h1>    
            </header>
    )
}