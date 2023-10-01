import { useState, useEffect } from "react";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import { getTasks } from "../../services/task.js";
import ListBar from "../../components/task/listBar/index.jsx";

function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getTasks().then(({ data }) => {
      const completedTasks = data.filter((task) => task.status === true);
      setCompletedTasks(completedTasks);
    });
  }, []);

  return (
    <>
      <ListBar />

      {completedTasks.map((task) => (
        <div key={task.id}>
          <TaskForm task={task} />
        </div>
      ))}
    </>
  );
}

export default CompletedTasks;
