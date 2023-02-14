import { useState } from "react";
import './NewTaskForm.css';

export default function NewTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({
    task: "",
    ageRange: "",
    points: 2
  });


  function handleAddTask(evt) {
    evt.preventDefault();
    if (newTask.name.trim() !== "") {
      addTask(newTask);
      setNewTask({ task: "", ageRange: "", points: 2 });
    }
  }

  function handleChange(evt) {
    console.log(evt)
    setNewTask({ ...newTask, [evt.target.name]:evt.target.value });
  }

  return (
    <div className="NeTaskForm">
      <form onSubmit={handleAddTask}>
        <label>Task</label>
        <input
          name="task"
          onChange={handleChange}
          value={newTask.task}
          placeholder=""
        />
        <br/>
        <label>Age Range</label>
        <select
          name="ageRange"
          defaultValue=""
          onChange={handleChange}
          value={newTask.ageRange}
        >
          <option value={2}>2+</option>
          <option value={4}>4+</option>
          <option value={6}>6+</option>
          <option value={8}>8+</option>
          <option value={10}>10+</option>
          <option value={12}>12+</option>
        </select>
        <br/>
        <label>Points</label>
        <select
          name="points"
          defaultValue=""
          onChange={handleChange}
          value={newTask.points}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <br/>
        <button>ADD TASK</button>
      </form>
    </div>
  );
}