import React, { useState } from 'react';
const ToDoForm = props => {
  const { addTodoItem } = props;
  const [todoStr, setTodoStr] = useState('');

  const changeTodoStr = e => {
    setTodoStr(e.target.value);
  };

  const clickAddBtn = () => {
    addTodoItem(todoStr);
    setTodoStr('');
  };

  return (
    <div className="inputWrap">
      <input type="text" value={todoStr} onChange={changeTodoStr} />
      <button type="button" className="addBtn" onClick={clickAddBtn}>
        추가
      </button>
    </div>
  );
};

export default ToDoForm;
