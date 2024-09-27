import React, { useState } from "react";

const TaskItem = ({ index, task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    editTask(index, editedTask); // Save the edited task
    setIsEditing(false); // Exit editing mode
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedTask.assignedTo}
            onChange={(e) => setEditedTask({ ...editedTask, assignedTo: e.target.value })}
          />
        ) : (
          <span className="fw-bold">{task.assignedTo}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="Started">Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        ) : (
          <span className="fw-bold">{task.status}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
          />
        ) : (
          <span className="small text-secondary">{task.dueDate}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <select
            value={editedTask.priority}
            onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
          >
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        ) : (
          <span className="fw-bold">{task.priority}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          ></textarea>
        ) : (
          <p>{task.description}</p>
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <span className="options">
            <i onClick={() => setIsEditing(true)} className="fas fa-edit"></i>
            <i onClick={() => deleteTask(index, task.text)} className="fas fa-trash-alt"></i>
          </span>
        )}
      </td>
    </tr>
  );
};

export default TaskItem;
