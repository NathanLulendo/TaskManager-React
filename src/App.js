import React, { useState, useEffect } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import "./App.css";

function App() {
  // Function to initialize the state with tasks from local storage
  const initializeTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("Loaded tasks from local storage:", storedTasks);
    return storedTasks || [];
  };

  // State for theme (light or dark)
  const [theme, setTheme] = useState("light");
  // State for tasks, initialized with tasks from local storage
  const [tasks, setTasks] = useState(initializeTasks);

  // Effect to save tasks to local storage whenever they change
  useEffect(() => {
    console.log("Saving tasks to local storage:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Function to add a new task
  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: task.text,
        completed: false,
        dueDate: task.dueDate,
      },
    ]);
  };

  // Function to toggle the completion status of a task
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to edit the text of a task
  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  // State for task filter (all, active, completed)
  const [filter, setFilter] = useState("all");
  // Filter tasks based on the current filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  console.log("Current tasks state:", tasks);

  return (
    <div className={`App ${theme}`}>
      <h1>My To-Do List</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <TaskForm addTask={addTask} />
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
