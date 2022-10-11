import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.scss';

// 할일 고유 아이디, 수정/삭제를 위해 고유 아이디가 필요함
let id = 3;
const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  // 초기 데이터, 추후 각 서버에서 받아올 예정
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      todo: '과제하기',
      isCompleted: true,
      userId: 1,
    },
    {
      id: 2,
      todo: '등산하기',
      isCompleted: false,
      userId: 1,
    },
  ]);

  /**
   * 투두 리스트 추가
   * @param {string} item
   */
  const addTodoItem = item => {
    // 체
    setTodoData(
      todoData.concat({ id: id++, ...{ isCompleted: false, todo: item } })
    );
  };

  /**
   * 투두리스트 삭제
   * @param {*} id
   */
  const removeTodoItem = id => {
    setTodoData(
      todoData.filter(todoArr => {
        return todoArr.id !== id;
      })
    );
  };

  /**
   * 투두 리스트 내용 업데이트(체크박스 및 할일 내용)
   * @param {number} id
   * @param {boolean} check
   * @param {string} todo
   */
  const updateTodoItem = (id, check, todo) => {
    setTodoData(
      todoData.map(item => {
        return item.id === id
          ? { ...item, ...{ isCompleted: check }, ...{ todo: todo } }
          : item;
      })
    );
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoForm addTodoItem={addTodoItem} />
      <TodoList
        todoData={todoData}
        removeTodoItem={removeTodoItem}
        updateTodoItem={updateTodoItem}
      />
    </div>
  );
};

export default Todo;
