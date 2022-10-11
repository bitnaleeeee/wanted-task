import React, { useState } from 'react';
import './TodoForm.scss';

const ToDoForm = props => {
  const { addTodoItem } = props;
  const [todoStr, setTodoStr] = useState('');

  const changeTodoStr = e => {
    setTodoStr(e.target.value);
  };

  const clickAddBtn = () => {
    if (todoStr.length) {
      addTodoItem(todoStr);
      setTodoStr('');
    }
  };

  return (
    <div className="todoForm">
      <input type="text" value={todoStr} onChange={changeTodoStr} />
      <button
        type="button"
        className={todoStr.length ? 'addBtn on' : 'addBtn'}
        onClick={clickAddBtn}
      >
        추가
      </button>
    </div>
  );
};

export default ToDoForm;
