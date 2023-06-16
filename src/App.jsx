import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    getData();
  },[]);

    const getData = async () =>{
      try {
        const incomingData = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const formattedData = await incomingData.json();
        setTodo(formattedData);
        console.log(formattedData);
      }catch (error){
        console.log(error);
      }
    };


  return (
    <div>
      <LoginForm/>
      <Container className="my-5">
        <h1 className="my-5 text-center display-2">Todo List</h1>
        <Table striped bordered hover>
        <thead> 
          <tr>
            <th>#</th>
            <th>title</th>
            
            </tr> 
        </thead>
        <tbody>
          {todos.map((todo,i) => (
            <tr key={todo.id}>
              <td>{i+1}</td>
              <td style={{color: todo.completed ? 'green' : 'red',}}>{todo.title}</td>
              
            </tr>
          ))}
        </tbody>
        </Table>
        </Container></div>
  )
}
