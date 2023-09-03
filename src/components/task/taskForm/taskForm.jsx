import { getTasks, getTaskId, deleteTaskId } from "../../../services/task.js";
import { useState, useEffect } from "react";
import Button from "../../button/button.jsx";
import { Link, NavLink } from "react-router-dom";

function deleteTask(id) {
  deleteTaskId(id);
}

function TaskForm({ task }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(({ data }) => setTasks(data));
  }, [getTasks]);

  return (
    <>
      <form className="flex flex-column justify-center items-center m-2">
        {/* DIŞ ÇEVRE */}
        <ul className=" p-4 shadow-lg rounded-xl max-w-3xl bg-gradient-to-b from-cyan-800">
          {/* CHECKED */}
          {/* <li>
            <input className="w-4 h-4 m-2" type="checkbox" id="isCompleted" />
          </li> */}
          {/* TITLE */}
          <li className="p-2 text-center max-w-md">
            <label className="font-semibold text-white font-mono text-xl text-black">
              Title
            </label>
            <p
              name="title"
              className="bg-gray-200 p-2 rounded-xl text-center m-1 font-semibold w-64 overflow-auto"
            >
              {task.title}
            </p>
          </li>
          {/* DESCRIPTION */}
          <li className="p-2 text-center max-w-xl">
            <label className="font-semibold text-white font-mono text-xl text-black">
              Description
            </label>
            <p
              id="description"
              name="description"
              className="bg-gray-200 p-2 rounded-xl text-center m-1 font-semibold w-64 h-32 max-h-24 max-w-100 overflow-auto"
            >
              {task.description}
            </p>
          </li>
          {/* DATE */}
          <li className="flex items-center justify-center">
            <label className="font-semibold text-black font-mono p-2 text-lg">
              Due Date:
            </label>
            <input
              className="bg-gray-200 p-2 rounded-xl text-center m-2 font-semibold text-base text-black"
              type="date"
              id="dueDate"
              name="dueDate"
              value={task.dueDate}
              format="dd/MM/yyyy"
            />
          </li>
          {/* BUTTONS */}
          <div className="flex items-center justify-between">
            <a
              className="bg-red-600 text-white m-2 p-3 rounded-xl hover:bg-red-900"
              text="Düzenle"
              href={`/task-edit/${task.id}`}
            >
              Düzenle
            </a>

            <Button
              className="bg-green-700 text-white p-2 m-2 rounded-xl hover:bg-green-900 "
              text="Sil"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </ul>
      </form>
    </>
  );
}

export default TaskForm;
