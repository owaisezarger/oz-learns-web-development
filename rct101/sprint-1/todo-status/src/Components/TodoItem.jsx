import React from "react";

const TodoItem = ({ todo, onToggle }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <div>
      <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {todo.text}
      </li>
    </div>
  );
};
export default TodoItem;
