import React, { useState } from 'react';

function NewTaskModal({ onClose, onAddTask }) {
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Normal');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const newTask = {
      id: Date.now(), // Unique ID for the task
      text: description, // Use the description as the task text
      assignedTo,
      status,
      dueDate,
      priority,
      completed: false, // New tasks are incomplete by default
    };

    onAddTask(newTask); // Pass the new task to the parent component
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Assigned To:</label>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">Save Task</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default NewTaskModal;
