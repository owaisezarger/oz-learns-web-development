import React, { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      text: text,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
