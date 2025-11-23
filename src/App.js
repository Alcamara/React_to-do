import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { TasksProvider } from './context/TasksContext/TasksContext';

import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ToDoForm from './components/to_do_form/to_do_form';
import { ToDoList } from './components/to_do_list/to_do_list';
import { Card } from './components/common/card/card';
import { ToastContainer } from 'react-toastify';

function App() {
   

  return (
    <>
     <Header/>
     <TasksProvider>
        <Routes>
        <Route
          index
          element={
            <>
              
              <ToastContainer/>
              <ToDoForm/>
              <ToDoList/>
            </>
          }
        >
        </Route>
        <Route path='/details/:id' element={<Card/>} />
      </Routes>
    </TasksProvider>

    </>
  );
}

export default App;
