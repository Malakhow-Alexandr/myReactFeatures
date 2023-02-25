import React, { Component } from 'react';
import TodoList from './ToDoList';
import initialTodos from '../../todos.json';

export class TodoListBoard extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <div>
          <p>ToDos quantity: {todos.length}</p>
          <p>Completed Todo: {completedTodos}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
