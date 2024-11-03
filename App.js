// App.js
import React, { useState } from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update task status (e.g., complete/incomplete)
  const updateTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>Plan-it!</h1>
      <div className="main-container">
        <div className="column">
          <PomodoroTimer />
        </div>
        <div className="column">
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </div>
  );
}


export default App;

