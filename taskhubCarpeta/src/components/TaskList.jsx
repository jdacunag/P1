import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./Taskcard";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    
    <div>
    <p> hola </p>
    {tasks.map((tasks) => (
      <TaskCard key={tasks.id} task={tasks} />
    ))}
  </div>
)}
export default TaskList