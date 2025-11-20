import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ToDoForm from './components/to_do_form/to_do_form';
import { ToDoList } from './components/to_do_list/to_do_list';

function App() {
  return (
    <>
      <Header/>
      <ToDoForm/>
      <ToDoList/>
    </>
  );
}

export default App;
