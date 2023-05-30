import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

// ************todo jsx*************************

// import React, { useState } from "react";
// import TodoList from "./TodoList";

// function Todo() {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleAdd = () => {
//     if (title.trim() !== "") {
//       const newTask = {
//         id: Date.now(),
//         title: title,
//         completed: false
//       };
//       setTasks([...tasks, newTask]);
//       setTitle("");
//     }
//   };

//   const handleToggle = (taskId) => {
//     setTasks(tasks.map(task => {
//       if (task.id === taskId) {
//         return {
//           ...task,
//           completed: !task.completed
//         };
//       }
//       return task;
//     }));
//   };

//   return (
//     <div>
//       <input type="text" value={title} onChange={handleChange} />
//       <button onClick={handleAdd}>Add</button>
//       <TodoList tasks={tasks} onToggle={handleToggle} />
//     </div>
//   );
// }

// export default Todo;

// ******************todoList jsx****************

// import React from "react";
// import TodoItem from "./TodoItem";

// function TodoList({ tasks, onToggle }) {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <TodoItem key={task.id} task={task} onToggle={onToggle} />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

//***************** todoItem *************************

// import React from "react";

// function TodoItem({ task, onToggle }) {
//   const handleToggle = () => {
//     onToggle(task.id);
//   };

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={task.completed}
//         onChange={handleToggle}
//       />
//       {task.title}
//     </li>
//   );
// }

// export default TodoItem;
