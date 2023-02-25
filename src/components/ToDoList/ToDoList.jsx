import React, { Component } from 'react';
import {
  TodoListStyled,
  TodoListStyledItem,
  Discription,
  Button,
} from './ToDoList.styled';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <TodoListStyled>
      {todos.map(({ id, text, completed }) => (
        <TodoListStyledItem key={id}>
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
