import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

let id = 3;
const ToDo = () => {
  const [todoArr, setTodoArr] = useState([
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

  // 투두리스트 추가
  function addTodoItem(item) {
    setTodoArr(
      todoArr.concat({ id: id++, ...{ isCompleted: false, todo: item } })
    );
  }

  // 투두리스트 삭제
  function removeTodoItem(id) {
    setTodoArr(
      todoArr.filter(todoArr => {
        return todoArr.id !== id;
      })
    );
  }

  // 투두 리스트 내용 업데이트
  function updateTodoItem(id, check, todo) {
    setTodoArr(
      todoArr.map(item => {
        return item.id === id
          ? { ...item, ...{ isCompleted: check }, ...{ todo: todo } }
          : item;
      })
    );
  }

  // const addTodoItem = (item) = {
  //   setTodoArr(
  //     todoArr.concat({ id: id++, ...{ isCompleted: false, todo: item } })
  //   )
  // }

  // const removeTodoItem = id => {
  //   setTodoArr(
  //     todoArr.filter(todoArr => {
  //       return todoArr.id !== id;
  //     })
  //   );
  // };

  return (
    <div>
      <ToDoForm addTodoItem={addTodoItem} />
      <ToDoList
        todoArr={todoArr}
        removeTodoItem={removeTodoItem}
        updateTodoItem={updateTodoItem}
      />
    </div>
  );
};
export default ToDo;
