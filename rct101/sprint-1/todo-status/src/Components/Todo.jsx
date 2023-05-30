import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
};
export default Todo;
