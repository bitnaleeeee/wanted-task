import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  const { todoData, removeTodoItem, updateTodoItem } = props;
  return (
    <div className="todoList">
      {todoData.map((item, idx) => {
        return (
          <TodoItem
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

export default TodoList;
