import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Todos } from './components/interface';
import TodoForm from './components/todo-form';
import TodoList from './components/todolist';

// function App() {
//   return (
//   <div className='app'>
//   <h1>todo list</h1>
//   <div/>
//   );
// }

function App(){

  const [todoList, setTodoList] = useState<Todos[]>([]);

  const addTodo = (todo:string):void => {
  
    if (!todo) {
      alert("please add todo!");
      return;
    }
    const data: Todos = {
      id: todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
  };

  const complateTodo = (id:number):void =>{

    setTodoList(todoList.map((todo:Todos):Todos=> todo.id === id
    ? Object.assign(todo, { completed: true }) && todo
    : todo ))

  }

  const deleteTodo = (id:number):void =>{
 
    setTodoList(todoList.filter((todo:Todos):Todos | null =>  todo.id !== id ? todo:null ));
  }

  return(
    <div className="app">
    <h1 className="heading">React Typescript Todo App</h1>
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <div className="todoList">
        {todoList.map((todo: Todos, key: number) => (
          <TodoList
            key={key}
            todo={todo}
            completeTodo={complateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default App;
