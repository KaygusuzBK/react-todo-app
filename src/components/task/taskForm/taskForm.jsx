import { getTasks, getTaskId, deleteTaskId } from "../../../services/task.js";
import { useState, useEffect } from "react";
import Button from "../../button/button.jsx";
import { Link, NavLink } from "react-router-dom";

function deleteTask(id) {
  deleteTaskId(id);
}

function TaskForm({ task }) {
  return (
    <>
      <div className="flex flex-column justify-center items-center m-3">
        {/* DIŞ ÇEVRE */}
        <div className=" p-3 rounded-xl bg-gradient-to-b from-cyan-600 to-blue-500">
          <div className="p-2 text-start max-w-md">
            <label className="font-semibold text-white font-mono text-xl  p-2">
              Title
            </label>
            <p
              name="title"
              className="bg-gray-200 p-2 rounded-2xl text-center m-1 font-semibold w-64 overflow-auto"
            >
              {task.title}
            </p>
          </div>
          {/* DESCRIPTION */}
          <div className="p-2 text-start max-w-xl">
            <label className="font-semibold text-white font-mono text-xl p-2">
              Description
            </label>
            <p
              id="description"
              name="description"
              className="bg-gray-200 p-2 rounded-2xl text-center m-1 font-semibold w-64 h-32 max-h-24 max-w-100 overflow-auto"
            >
              {task.description}
            </p>
          </div>
          {/* DATE */}
          <div className="flex items-center justify-center">
            <label className="font-semibold text-white font-mono p-2 text-lg">
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
          </div>
          {/* BUTTONS */}
          <div className="flex items-center justify-between">
            <a
              className="bg-yellow-500 text-white m-2 p-3 rounded-xl hover:bg-yellow-600"
              text="Düzenle"
              href={`/task-edit/${task.id}`}
            >
              Düzenle
            </a>

            <Button
              className="bg-red-700 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-900 "
              text="Sil"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
