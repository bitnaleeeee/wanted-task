import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.scss';

// 할일 고유 아이디(Mook 데이터용)
// let id = 0;

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
    // API
    getTodo();
  }, [navigate]);

  // 초기 데이터(Mook 데이터용)
  const [todoData, setTodoData] = useState([
    {
      id: 0,
      todo: '',
      isCompleted: false,
      userId: 0,
    },
  ]);

  /**
   * 1. [API] 데이터 가져오기
   */
  const getTodo = () => {
    // [API]
    fetch(API.TODO, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // 데이터 초기 셋팅
        setTodoData(data);
        console.log('최초 데이터 리스트:', data);
      });
  };

  /**
   * 2. [API] 투두 리스트 추가
   * @param {string} item
   */
  const addTodoItem = item => {
    // [API]
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
        // [Local]
        setTodoData(
          todoData.concat({
            id: data.id,
            ...{ isCompleted: false, todo: item },
          })
        );
        console.log('추가 단일 데이터:', data);
      });
  };

  /**
   * 3. [API] 투두리스트 삭제
   * @param {*} id
   */
  const removeTodoItem = id => {
    // [API]
    fetch(API.TODO + '/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    // [Local]
    setTodoData(
      todoData.filter(todoArr => {
        return todoArr.id !== id;
      })
    );
    console.log('삭제 데이터 ID:', id);
  };

  /**
   * 4. [API] 투두 리스트 내용 업데이트(체크박스 및 할일 내용)
   * @param {number} id
   * @param {boolean} check
   * @param {string} todo
   */
  const updateTodoItem = (id, check, todo) => {
    // [API]
    fetch(API.TODO + '/' + id, {
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
        // [Local]
        setTodoData(
          todoData.map(item => {
            return item.id === id
              ? { ...item, ...{ isCompleted: check }, ...{ todo: todo } }
              : item;
          })
        );
        console.log('수정된 단일 데이터:', data);
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
