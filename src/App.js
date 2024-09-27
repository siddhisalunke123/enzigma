import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal"; // Import the modal component
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(data);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    closeModal(); // Close modal after adding task
  };

  const deleteTask = (index, taskName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the task: "${taskName}"?`);
    if (confirmDelete) {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  };

  const editTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const refreshTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  };
  
  const openModal = () => setIsModalOpen(true); // Function to open modal
  const closeModal = () => setIsModalOpen(false); // Function to close modal

  return (
    <div className="app-container">
      <div className="checklist-button-container">
        <button className="checklist-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white" // Change icon color to white for contrast
            className="bi bi-card-checklist"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
          </svg>
        </button> 
        &nbsp; &nbsp;  
        <span className="task-label">Tasks</span>
        <div className="button-container">
          <button className="new-task-button" onClick={openModal}>New Task</button>
          <button className="refresh-button" onClick={refreshTasks}>Refresh</button>
        </div>
      </div>

      <div className="button-container">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>   
        </div> 
      </div>

      {/* Pass deleteTask to TaskList */}
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}> 
        <AddTask addTask={addTask} />
      </Modal>
      <br></br>
    </div>
  );
};

export default App;
