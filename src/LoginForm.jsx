import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import Container from 'react-bootstrap/Container';


export default function App() {

  const [todos, setTodo] = useState([]);
  

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    try {
      const incomingData = await fetch("https://jsonplaceholder.typicode.com/todos");
      const formattedData = await incomingData.json();
      setTodo(formattedData);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    
    <div className='mx-5'>
      <Container className='mt-5 pt-5'>
        <h1 className='text-center'>Login Form</h1>
        <LoginForm/>
      </Container>
      
      <h1 className='text-center my-5'>To Do List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>

          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo,i) => {
             
              

             { return todo.completed ?  
                <tr className='table1' key={todo.id}>
                <td>{i+1}</td>
                <td>{todo.title}</td>
                <td className='bg-success'>{todo.completed}</td>
              </tr>
                 :
                
                  <tr className='table2' key={todo.id}>
                  <td>{i+1}</td>
                  <td>{todo.title}</td>
                  <td className='bg-danger'>{todo.completed}</td>
                </tr>
                  
                }
              
          
            }
            )
          }

        </tbody>
      </Table>
    </div>
  )
}