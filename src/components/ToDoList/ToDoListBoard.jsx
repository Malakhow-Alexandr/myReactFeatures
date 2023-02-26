import React, { Component } from 'react';
import TodoList from './ToDoList';
import initialTodos from '../../todos.json';
import {
  TodolistBoardContainer,
  BoardDescription,
} from './ToDoListBoard.styled';
import { TodoEditor } from 'TodoEditor/TodoEditor';
import { TodoFilter } from 'TodoFilter/TodoFilter';
import { nanoid } from 'nanoid';

export class TodoListBoard extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Horey we found id');
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  render() {
    const { todos, filter } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <TodolistBoardContainer>
        <BoardDescription>Todos quantity: {todos.length}</BoardDescription>
        <BoardDescription>Completed Todo: {completedTodos}</BoardDescription>

        <div>
          <TodoEditor onSubmit={this.addTodo}></TodoEditor>
          <TodoFilter value={filter} onChange={this.changeFilter} />
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </TodolistBoardContainer>
    );
  }
}
