import { useState, useEffect } from "react";
import { getCompletedTasks } from "../../services/complatedTask.js";
import TaskForm from "../../components/task/taskForm/TaskForm.jsx";

function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getCompletedTasks().then(({ data }) => setCompletedTasks(data));
  }, []);

  return (
    <>
      <h1>Completed Tasks</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-7 gap-3 absolute w-full h-full p-4">
        {completedTasks.map((complatedTask) => (
          <div key={complatedTask.id} className="w-full h-full">
            <TaskForm task={complatedTask} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CompletedTasks;
