import React from "react";
import { Link } from "react-router-dom";
import { getTasks, getTaskId } from "../../services//task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import TaskDetail from "../TaskDetail/TaskDetail.jsx";
import classNames from "classnames";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);


  React.useEffect(() => {
    getTasks().then(({ data }) => setTasks(data));
    console;
  }, [getTasks]);

  return (
    <>
      <div className="bg-blue-100">
        <h1
          className={classNames(
            "text-3xl",
            "text-center",
            "font-bold",
            "text-rose-800",
            "p-4"
          )}
        >
          Tasklar
        </h1>
        <ul className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:gird-cols-3 gap-4">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskDetail task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tasks;
