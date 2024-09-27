import React from 'react';

function TodoApp({ tasks, onDeleteTask, onToggleComplete }) {
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            {task.text} - {task.assignedTo} - {task.dueDate} - {task.priority}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
