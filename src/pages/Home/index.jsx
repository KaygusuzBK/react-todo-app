import React, { useEffect, useState } from "react";
import { getTasks } from "../../services/task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import ListBar from "../../components/task/listBar/index.jsx";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const getTaskList = () => {
    getTasks().then(({ data }) => {
      const tasks = data.filter((task) => task.status === false);
      setTasks(tasks);
    });
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <ListBar />
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskForm task={task} />
        </div>
      ))}
    </>
  );
}

export default Tasks;
