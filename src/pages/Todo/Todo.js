import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.scss';

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
    getTodo();
  }, [navigate]);

  const [todoData, setTodoData] = useState([
    {
      id: 0,
      todo: '',
      isCompleted: false,
      userId: 0,
    },
  ]);

  const getTodo = () => {
    // [API]
    fetch(API.TODO, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setTodoData(data);
      });
  };

  const addTodoItem = item => {
    fetch(API.TODO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        todo: item,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setTodoData(
          todoData.concat({
            id: data.id,
            ...{ isCompleted: false, todo: item },
          })
        );
      });
  };
  const removeTodoItem = id => {
    fetch(`${API.TODO}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setTodoData(
      todoData.filter(todoArr => {
        return todoArr.id !== id;
      })
    );
  };

  const updateTodoItem = (id, check, todo) => {
    fetch(`${API.TODO}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        todo: todo,
        isCompleted: check,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setTodoData(
          todoData.map(item => {
            return item.id === id
              ? { ...item, ...{ isCompleted: check }, ...{ todo: todo } }
              : item;
          })
        );
      });
  };

  return (
    <div className="todo">
      <h1 className="logo">Todo List</h1>
      <article className="article">
        <TodoForm addTodoItem={addTodoItem} />
        <TodoList
          todoData={todoData}
          removeTodoItem={removeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      </article>
    </div>
  );
};

export default Todo;
