import React from "react";

const TodoItem = ({ todo, onToggle }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <div>
      <li>
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
