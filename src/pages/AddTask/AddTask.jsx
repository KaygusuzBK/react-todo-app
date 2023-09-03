import React from "react";
import { useState, useEffect, useCallback } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/button.jsx";
import { memo } from "react";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  return (
    <>
      <div className="flex p-3 justify-center text-center m-4">
        <div className="grid gap-2 grid-cols-2">
          <h1 className="text-xl font-bold ">Add Task:</h1>
          <Input
            placeholder="Title"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          ></Input>
          <h1 className="text-xl font-bold ">Description:</h1>
          <Input
            placeholder="Description"
            type="textarea"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></Input>
          <h1 className="text-xl font-bold">Date:</h1>
          <Input
            data-date-format="DD MMMM YYYY"
            type="date"
            id="dueDate"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          ></Input>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-green-500 text-white p-2 m-2 hover:bg-green-700 rounded-lg"
          text="Add Task"
          as="button"
          onClick={() => {
            console.log(task);
            pushTask(task);
          }}
        ></Button>
      </div>
    </>
  );
}
export default memo(AddTask);
