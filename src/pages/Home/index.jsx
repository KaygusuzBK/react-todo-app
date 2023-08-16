import React from "react";
import { getTasks, getTaskId } from "../../services//task.js";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks().then(({ data }) => setTasks(data));
  }
  , []);

  return (
    <>

    <div>
      <h1>Tasklar</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <a href={`/tasks/${task.id}`}>{task.title}</a>
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}

export default Tasks;
