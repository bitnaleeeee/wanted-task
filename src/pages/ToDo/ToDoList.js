import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
  const { todoArr, removeTodoItem, updateTodoItem } = props;
  return (
    <div className="todoList">
      {todoArr.map((item, idx) => {
        return (
          <ToDoItem
            key={idx}
            data={item}
            removeTodoItem={removeTodoItem}
            updateTodoItem={updateTodoItem}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
