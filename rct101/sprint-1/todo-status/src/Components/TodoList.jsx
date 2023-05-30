import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle }) => {
  console.log(todos);
  return (
    <div>
      <h4>List of todos</h4>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
