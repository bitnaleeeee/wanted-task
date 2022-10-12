import React, { useState, useEffect } from 'react';
import './TodoItem.scss';

let prevTodoStr = '';

const TodoItem = props => {
  const { data, removeTodoItem, updateTodoItem } = props;
  const [editing, setEditing] = useState(false);
  const [todoStr, setTodoStr] = useState('');
  const [todoCheck, setTodoCheck] = useState(false);

  useEffect(() => {
    setTodoStr(data.todo);
    setTodoCheck(data.isCompleted);
  }, [data.todo, data.isCompleted]);

  const changeEdition = () => {
    prevTodoStr = todoStr;
    setTodoStr(todoStr);
    setEditing(!editing);
    updateTodoItem(data.id, todoCheck, todoStr);
  };

  const cencelEdtiong = () => {
    setTodoStr(prevTodoStr);
    setEditing(!editing);
  };

  const changeTodoStr = e => {
    setTodoStr(e.target.value);
  };

  const deleteTodoItem = () => {
    removeTodoItem(data.id);
  };

  const changeCheckbox = () => {
    setTodoCheck(!todoCheck);
    updateTodoItem(data.id, !todoCheck, todoStr);
  };

  if (editing) {
    return (
      <div className="item">
        <input
          type="checkbox"
          checked={todoCheck}
          onChange={changeCheckbox}
          readOnly
        />
        <input type="text" value={todoStr} onChange={changeTodoStr} />
        <div className="btnBox">
          <button type="button" className="sendBtn" onClick={changeEdition}>
            제출
          </button>
          <button type="button" className="cencleBtn" onClick={cencelEdtiong}>
            취소
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="item">
      <label
        htmlFor={'chk_' + data.id}
        className={data.isCompleted ? 'clear' : ''}
      >
        <input
          type="checkbox"
          id={'chk_' + data.id}
          checked={todoCheck}
          onChange={changeCheckbox}
          readOnly
        />
        {todoStr}
      </label>
      <div className="btnBox">
        <button type="button" className="modifyBtn" onClick={changeEdition}>
          수정
        </button>
        <button type="button" className="deleteBtn" onClick={deleteTodoItem}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
