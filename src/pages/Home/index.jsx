import React from "react";
import { Link } from "react-router-dom";
import { getTasks, getTaskId } from "../../services//task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import classNames from "classnames";

function Tasks() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks().then(({ data }) => setTasks(data));
  }, [getTasks]);

  return (
    <>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-7 gap-3 absolute w-full h-full p-4">
          {tasks.map((task) => (
            <div key={task.id}>
              <TaskForm task={task} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;
