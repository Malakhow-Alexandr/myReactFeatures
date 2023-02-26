import React from 'react';
import {
  TodoListStyled,
  TodoListStyledItem,
  Discription,
  Button,
} from './ToDoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <TodoListStyled>
      {todos.map(({ id, text, completed }) => (
        <TodoListStyledItem
          style={{
            outline: completed && '1px solid green',
            border: completed && '1px solid transparent',
          }}
          key={id}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <Discription>{text}</Discription>
          <Button
            type="button"
            onClick={() => {
              onDeleteTodo(id);
            }}
          >
            Delete
          </Button>
        </TodoListStyledItem>
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
