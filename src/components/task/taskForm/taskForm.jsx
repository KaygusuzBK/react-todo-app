import { getTasks, getTaskId } from "../../../services/task.js";
import { useState, useEffect } from "react";
import Button from "../../button/button.jsx";

function TaskForm(task) {
  return (
    <>
      <form onSubmit={getTasks} className="flex flex-column justify-center items-center m-2">
        <ul className="flex flex-column p-4 justify-center items-center shadow-lg bg-red-500 rounded-xl">
          <li className="">
            <input type="checkbox" />
          </li>
          <li className="p-2">
            <label htmlFor="title">Title: </label>
            <p name="title">{getTasks.title}</p>
          </li>
          <li className="p-2">
            <label htmlFor="description">Description</label>
            <p id="description" name="description">
              {getTasks.description}
            </p>
          </li>
          <li className="p-2">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={getTasks.dueDate}
            />
          </li >
          <div className="flex">
            <Button type="submit" className="bg-red-600 text-white m-2 p-2" text="Düzenle" />
            <Button type="submit" text="Sil" className="bg-green-700 m-2 p-2 text-white" />
          </div>
        </ul>
      </form>
    </>
  );
}

export default TaskForm;
