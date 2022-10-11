import React, { useState, useEffect } from 'react';

let prevTodoStr = '';

const ToDoItem = props => {
  const { data, removeTodoItem, updateTodoItem } = props;
  const [editing, setEditing] = useState(false);
  const [todoStr, setTodoStr] = useState('');
  const [todoCheck, setTodoCheck] = useState(false);

  // 초기 투두리스트 값 변경
  useEffect(() => {
    setTodoStr(data.todo);
    setTodoCheck(data.isCompleted);
  }, [data.todo, data.isCompleted]);

  // 수정
  const changeEdition = () => {
    prevTodoStr = todoStr;
    setTodoStr(todoStr);
    setEditing(!editing);

    // 업데이트
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

    // 업데이트
    updateTodoItem(data.id, !todoCheck, todoStr);
  };

  // 수정모드
  if (editing) {
    return (
      <div>
        <input
          type="checkbox"
          checked={todoCheck}
          onChange={changeCheckbox}
          readOnly
        />
        <input type="text" value={todoStr} onChange={changeTodoStr} />
        <button type="button" className="sendBtn" onClick={changeEdition}>
          제출
        </button>
        <button type="button" className="cencleBtn" onClick={cencelEdtiong}>
          취소
        </button>
      </div>
    );
  }

  // 일반모드
  return (
    <div>
      <input
        type="checkbox"
        checked={todoCheck}
        onChange={changeCheckbox}
        readOnly
      />
      {todoStr}
      <button type="button" className="modifyBtn" onClick={changeEdition}>
        수정
      </button>
      <button type="button" className="deleteBtn" onClick={deleteTodoItem}>
        삭제
      </button>
    </div>
  );
};

export default ToDoItem;
