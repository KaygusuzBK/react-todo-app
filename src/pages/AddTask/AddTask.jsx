import React from "react";
import { useState, useEffect } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/button.jsx";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  return (
    <>
      <div className="flex p-3 justify-center text-center">
        <div className="grid gap-2 grid-cols-2">
          <h1 className="text-xl font-bold ">Add Task:</h1>
          <Input
            placeholder="Title"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          ></Input>
          <h1 className="text-xl font-bold ">Description:</h1>
          <Input
            placeholder="Description"
            type="textarea"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></Input>
          <h1 className="text-xl font-bold">Date:</h1>
          <Input
            type="date"
            id="dueDate"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          ></Input>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          text="Add Task"
          as="button"
          onClick={(() => console.log(task), pushTask(task))}
        ></Button>
      </div>
    </>
  );
}
export default AddTask;
