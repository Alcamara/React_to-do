import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ToDoForm from './components/to_do_form/to_do_form';
import { ToDoList } from './components/to_do_list/to_do_list';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [id, setId] = useState(0);

  const [task, setTask] = useState({
    id: id,
    date: '',
    description: '',
    isDone: false,
  });

  const [tasks, setTasks] = useState([])

  const handleChange = ({target}) => {
    setTask({...task, description: target.value});
  }

  const handleAddTask = () => {
    try {

    if (task.description.length === 0) {
      toast.error('error', {
        position: 'top-right',
      })
      return 
    }

    const date = new Date().toLocaleDateString();
    const newId = id + 1;

    const addedTask = {...task, id: newId , date: date};

    setTasks([...tasks, addedTask]);

    setId(newId);

    setTask({
      id: id,
      date: '',
      description: '',
      isDone: false,
    });
    
    toast.success("Task was Add!")

    } catch (error) {
      toast.error('Something went wrong!')
    }

  }

  return (
    <>
      <Header/>
      <ToastContainer/>
      <ToDoForm task={task} onAddTask={handleAddTask} onChange={handleChange}/>
      <ToDoList tasks={tasks}/>
    </>
  );
}

export default App;
