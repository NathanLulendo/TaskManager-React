import React, { useState } from "react";

function Task({ task, toggleTask, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Handle the edit button click
  const handleEdit = () => {
    if (isEditing) {
      // Save the edited task text
      editTask(task.id, newText);
    }
    // Toggle the editing state
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {/* Checkbox to toggle task completion */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        // Input field for editing task text
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        // Display task text with optional due date
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
          {task.dueDate && <span> (Due: {task.dueDate})</span>}
        </span>
      )}

      {/* Button to toggle between edit and save */}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      {/* Button to remove the task */}
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default Task;
