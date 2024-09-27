import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddTask = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleCancel = () => {
    resetForm(); // Reset form fields
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (assignedTo === "" || status === "" || priority === "") {
      alert("Please fill in all mandatory fields.");
    } else {
      addTask({ text: textInput, assignedTo, status, dueDate, priority, description: textarea });
      resetForm();
    }
  };

  const resetForm = () => {
    setTextInput("");
    setAssignedTo("");
    setStatus("");
    setDueDate("");
    setPriority("");
    setTextarea("");
  };

  return (
    <Form onSubmit={handleSubmit} className="add-task-form mb-3">
      <h3 className="text-center">New Task</h3>
      <hr />
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Assigned To <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Assigned To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Status <span className="text-danger">*</span></Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="Started">Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Priority <span className="text-danger">*</span></Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select Priority</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description here"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        />
      </Form.Group>
      <hr />
      <div className="button-group text-right">
        <Button variant="secondary" type="button" onClick={handleCancel} className="mr-2">Cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default AddTask;

