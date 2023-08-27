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
      <form
        onSubmit={getTasks}
        className="flex flex-column justify-center items-center m-2"
        go
      >
        <ul className="flex flex-column p-4 justify-center items-center shadow-2xl bg-blue-400 rounded-xl">
          <li className="">
            <input className="items-end w-4 h-4 m-2" type="checkbox" />
          </li>
          <li className="p-2 text-center">
            <label className="font-semibold text-white font-mono ">Title</label>
            <p
              name="title"
              className="bg-gray-200 p-2 rounded-xl text-center m-1 font-semibold"
            >
              {task.title}
            </p>
          </li>
          <li className="p-2 text-center">
            {/*  */}
            <label className="font-semibold text-white font-mono">
              Description
            </label>
            <p
              id="description"
              name="description"
              className="bg-gray-200 p-2 rounded-xl text-center m-1 font-semibold"
            >
              {task.description}
            </p>
          </li>
          <li className="p-2 text-center">
            <label className="font-semibold text-white font-mono ">
              Due Date
            </label>
            <input
              className="bg-gray-200 p-2 rounded-xl text-center m-1 font-semibold"
              type="date"
              id="dueDate"
              name="dueDate"
              value={task.dueDate}
              format="dd/MM/yyyy"
            />
          </li>
          <div className="flex">
            <a
              className="bg-red-600 text-white m-2 p-2 rounded-xl hover:bg-red-900"
              text="Düzenle"
              href={`/task-edit/${task.id}`}
              >Düzenle</a>
            
            <Button
              className="bg-green-700 m-2 p-2 text-white rounded-xl hover:bg-green-900"
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
