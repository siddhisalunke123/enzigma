import React, { useState } from "react";
import { Table, Dropdown, Button } from 'react-bootstrap';

const TaskList = ({ tasks = [], deleteTask, editTask }) => {  // Set default value for tasks
  const [searchTerm] = useState("");

  // Add a safety check to ensure tasks are filtered properly
  const filteredTasks = tasks.filter((task) =>
    task?.assignedTo?.toLowerCase().includes(searchTerm.toLowerCase())  // Use optional chaining
  );

  return (
    <div className="task-list">     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th style={{color:"blueviolet"}}>Assigned To</th>
            <th style={{color:"blueviolet"}}>Status</th>
            <th style={{color:"blueviolet"}}>Due Date</th>
            <th style={{color:"blueviolet"}}>Priority</th>
            <th style={{color:"blueviolet"}}>Description</th>
            <th style={{color:"blueviolet"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td style={{color:"blueviolet"}}>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => editTask(index)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => deleteTask(index, task.assignedTo)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 of {filteredTasks.length} records</span>
        <div>
          <Button variant="outline-secondary">First</Button>
          <Button variant="outline-secondary">Prev</Button>
          <Button variant="outline-secondary">Next</Button>
          <Button variant="outline-secondary">Last</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;


