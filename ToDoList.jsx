import "./ToDoList.css";
import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedtasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedtasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index - 1]] = [
        updatedtasks[index - 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]] = [
        updatedtasks[index + 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((element, index) => (
          <li key={index}>
            <span className="text">{element}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
