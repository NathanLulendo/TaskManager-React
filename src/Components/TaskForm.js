import React, { useState } from "react";

// TaskForm component allows users to add a new task with a due date
const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text, dueDate });
    setText("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
