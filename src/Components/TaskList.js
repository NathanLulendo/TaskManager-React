import React from "react";
import Task from "./Task"; // Import the Task component

// TaskList component definition
function TaskList({ tasks, toggleTask, removeTask, editTask }) {
  return (
    <div>
      {/* Display a message if there are no tasks */}
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        // Map over the tasks array and render a Task component for each task
        tasks.map((task) => (
          <Task
            key={task.id} // Unique key for each task
            task={task} // Pass the task object as a prop
            toggleTask={toggleTask} // Pass the toggleTask function as a prop
            removeTask={removeTask} // Pass the removeTask function as a prop
            editTask={editTask} // Pass the editTask function as a prop
          />
        ))
      )}
    </div>
  );
}

export default TaskList; // Export the TaskList component
